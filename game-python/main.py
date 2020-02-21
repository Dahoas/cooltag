from game import Game
from player import Player 

game = Game()

game.play_turn()

def display_ui(game):
    myfont = pygame.font.SysFont('Segoe UI', 20)
    myfont_bold = pygame.font.SysFont('Segoe UI', 20, True)
    text_score = myfont.render('SCORE: ', True, (0, 0, 0))
    text_score_number = myfont.render(str(score), True, (0, 0, 0))
    text_highest_number = myfont_bold.render(str(record), True, (0, 0, 0))
    game.gameDisplay.blit(text_score, (45, 440))
    game.gameDisplay.blit(text_score_number, (120, 440))
    game.gameDisplay.blit(text_highest, (190, 440))
    game.gameDisplay.blit(game.bg, (10, 10))

def display(game):
    game.gameDisplay.fill((255, 255, 255))
    player1 = game.state[0]
    player2 = game.state[1]
    display_ui(game, game.score, record)
    player1.display_player(game)
    player2.display_player(game)

def update_screen():
    pygame.display.update() 

def initialize_game(game):
	#what is this action for?
    action = [1, 0, 0]
    player1 = game.state[0]
    player2 = game.state[1]
    player1.update(game)
    reward1 = agent.set_reward(player, game.crash)
    agent.remember(state_init1, action, reward1, state_init2, game.crash)
    agent.replay_new(agent.memory)

def run():
    pygame.init()
    agent = DQNAgent()
    counter_games = 0
    score_plot = []
    counter_plot =[]
    record = 0
    while counter_games < 150:
        # Initialize classes
        game = Game(440, 440)
        player1 = game.state[0]
        player2 = game.state[1]

        # Perform first move
        initialize_game(player1, game, food1, agent)
        if display_option:
            display(game)

        while not game.crash:
            #agent.epsilon is set to give randomness to actions
            agent.epsilon = 80 - counter_games
            
            #get old state
            state_old = agent.get_state(game)
            
            #perform random actions based on agent.epsilon, or choose the action
            if randint(0, 200) < agent.epsilon:
                final_move = to_categorical(randint(0, 2), num_classes=3)
            else:
                # predict action based on the old state
                prediction = agent.model.predict(state_old.reshape((1,11)))
                final_move = to_categorical(np.argmax(prediction[0]), num_classes=3)
                
            #perform new move and get new state
            player1.do_move(final_move, player1.x, player1.y, game, food1, agent)
            state_new = agent.get_state(game, player1, food1)
            
            #set treward for the new state
            reward = agent.set_reward(player1, game.crash)
            
            #train short memory base on the new action and state
            agent.train_short_memory(state_old, final_move, reward, state_new, game.crash)
            
            # store the new data into a long term memory
            agent.remember(state_old, final_move, reward, state_new, game.crash)
            record = get_record(game.score, record)
            if display_option:
                display(player1, food1, game, record)
                pygame.time.wait(speed)
        
        agent.replay_new(agent.memory)
        counter_games += 1
        print('Game', counter_games, '      Score:', game.score)
        score_plot.append(game.score)
        counter_plot.append(counter_games)
    agent.model.save_weights('weights.hdf5')

run()