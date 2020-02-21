from player import Player

class Game:

    # 30 x 20 board 
    game_board = [[True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, False],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, False],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, False, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, False, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, False, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, False, False, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, False, False, True, True, True, True, True, False, False, True, True, True, True],
                  [True, True, True, True, True, True, True, True, False, False, True, True, False, False, False, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, False, True, True, True, True, False, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, False, True, True, True, True, False, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, False, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, False, False, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, False, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, False, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, False, False, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, False, False, False, False, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, False, False, True, True, False, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, False, False, False, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, False, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, False, False, False],
                  [True, True, False, False, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, False, False, True, True, True, True, True, True, True, False, True, True, True, True, True, True, True],
                  [True, True, True, True, True, False, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, False, True, True, True, True, True],
                  [True, True, True, True, True, True, True, True, True, True, True, True, True, True, False, False, True, True, False, False],
                  [True, True, True, True, True, True, True, False, False, True, True, True, True, False, False, False, True, True, False, False]]

    state = [player_one, player_two, board]

    def __init__(self, game_width, game_height):
        pygame.display.set_caption('Tag')
        self.game_width = game_width
        self.game_height = game_height
        self.gameDisplay = pygame.display.set_mode((game_width, game_height+60))
        self.bg = pygame.image.load("img/background.png")
        self.state[0] = Player(self,0,0,True)
        self.state[1] = Player(self,40,40,False)
        #Board is filled with barrier info, if we have that


