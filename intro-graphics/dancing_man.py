import pygame, math, time, sys
from pygame import gfxdraw

black = (0, 0, 0)
white = (255, 255, 255)

def draw_body1(hands_direction="down"):
	# Face structure
	pygame.draw.circle(screen, white, (350, 200), 30, 1)

	# Body line
	pygame.draw.line(screen, white, (350, 230), (370, 300))

	# Legs
	pygame.draw.line(screen, white, (370, 300), (330, 360))
	pygame.draw.line(screen, white, (370, 300), (365, 360))

	# Hands
	if hands_direction == "down":
		pygame.draw.line(screen, white, (350, 230), (320, 280))
		pygame.draw.line(screen, white, (350, 230), (345, 280))
	else:
		pygame.draw.line(screen, white, (350, 230), (280, 220))
		pygame.draw.line(screen, white, (350, 230), (290, 180))
	# pygame.draw.line(screen, white, (370, 300), (385, 360))

def draw_body2(hands_direction="down"):
	# Face structure
	pygame.draw.circle(screen, white, (350, 200), 30, 1)

	# Body line
	pygame.draw.line(screen, white, (350, 230), (340, 300))

	# Legs
	pygame.draw.line(screen, white, (340, 300), (350, 360))
	pygame.draw.line(screen, white, (340, 300), (385, 360))

	# Hands
	if hands_direction == "down":
		pygame.draw.line(screen, white, (350, 230), (385, 280))
		pygame.draw.line(screen, white, (350, 230), (360, 280))
	else:
		pygame.draw.line(screen, white, (350, 230), (420, 220))
		pygame.draw.line(screen, white, (350, 230), (410, 180))

def change_man(flag):
	if flag == 0:
		draw_body1()
	elif flag == 1:
		draw_body2()
	elif flag == 2:
		draw_body2("up")
	elif flag == 3:
		draw_body1("up")

	pygame.display.update()

def main():
	flag = 0
	while True:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				sys.exit()

		change_man(flag)
		pygame.time.delay(500)
		screen.blit(background, (0, 0))

		flag += 1
		if flag == 4:
			flag = 0

if __name__ == "__main__":

	pygame.init()
	size = [700, 700]
	background = pygame.Surface(size)
	screen = pygame.display.set_mode(size)

	main()
	pygame.quit()