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

    def __init__(self):
        self.player1 = Player(12, 11)
        self.player2 = Player(3, 5)
        self.moving = False

       
    def play_turn(self):

      if (not self.moving):

        # get new position (x, y)

        # check sides 
        if (x < 0)

        # self.player1.train_ml(self.game_board, player1, player2)




      self.player1.move(self.game_board)
      self.player2.move(self.game_board)

