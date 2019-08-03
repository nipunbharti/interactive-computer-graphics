import pygame, math
from pygame import gfxdraw

black = (0, 0, 0)
white = (255, 255, 255)

def main(center, radius):

	angle = 0

	gfxdraw.pixel(screen, int(center[0]), int(center[1]), white)

	while angle <= 180:

		a_down = radius*math.cos(math.pi*angle/180) + center[0]
		b_down = radius*math.sin(math.pi*angle/180) + center[1]
		b_upper = radius*math.sin(math.pi*(360-angle)/180) + center[1]

		print(int(a_down), int(b_down), int(a_down), int(b_upper))
		gfxdraw.pixel(screen, int(a_down), int(b_down), white)
		gfxdraw.pixel(screen, int(a_down), int(b_upper), white)

		angle += 1

	while True:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()

		pygame.display.update()

if __name__ == "__main__":
	first_point = input("Enter the center point: ")
	radius = float(input("Enter radius: "))

	first_point = [float(x) for x in first_point.split(',')]

	pygame.init()
	size = [700, 500]
	screen = pygame.display.set_mode(size)

	main(first_point, radius)
	pygame.quit()