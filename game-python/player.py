class Player:

    tagged = False
    bounce = 0
    position = [0,0]
    velocity = [0,0]
    acceleration = [0,0]

    def __init__(self, x, y):
        self.position = [x, y]

    def speed(self):
        return (self.velocity[0]**2 + self.velocity[1]**2)**(1/2)

    def update_pos(self):
        if (self.tagged):
            self.velocity = self.velocity + self.acceleration
            self.position = self.position * self.velocity

    def choose_accel(self):
        self.acceleration = [1,1]

    # def move(self, x, y):
    #     self.x = x
    #     self.y = y

    def update(self):
        self.choose_accel()
        if (self.tagged and self.intersect() and self.bounce == 0):
            self.bounce = 30
            self.acceleration = self.acceleration * -1
        if (self.bounce == 0):
            self.velocity = self.velocity + self.acceleration
            if(self.speed() > 100):
                self.velocity = (self.velocity/speed())*100
            # self.update();
            self.update_pos()
                        
        else:
            self.bounce = self.bounce - 1
            # this.update();
            self.update_pos()
            
                    

      
        
