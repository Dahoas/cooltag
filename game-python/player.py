class Player:

    tagged = False
    bounce = 0
    position = [0,0]
    velocity = [0,0]
    acceleration = [0,0]
    it = False

    #State is 1. board(barrier positioning)
    #         2. Player 1 info
    #         3. Player 2 info
    #         4. Reward function is time tagged

    def __init__(self, x, y, it):
        self.position = [x, y]
        self.it = it
        #self.image = pygame.image.load('img/snakeBody.png')

    def speed(self):
        return (self.velocity[0]**2 + self.velocity[1]**2)**(1/2)

    def update_pos(self):
        if (self.tagged):
            self.velocity = self.velocity + self.acceleration
            if(self.speed() > 100):
                self.velocity = (self.velocity/speed())*100
            self.position = self.position + self.velocity

    def choose_accel(self):
        self.acceleration = [1,1]

    def update(self):
        self.choose_accel()
        if (self.tagged and self.intersect() and self.bounce == 0):
            self.bounce = 30
            self.acceleration = self.acceleration * -1
        if (self.bounce == 0):
            self.update_pos()
                        
        else:
            self.bounce = self.bounce - 1
            # this.update();
            self.update_pos()
            
    def display_player(self):         
        update_screen()
                       

      
        
