import pygame
from pygame import gfxdraw

black = (0, 0, 0)
white = (255, 255, 255)

def drawCircle(center_x, center_y, offset_x, offset_y):
	gfxdraw.pixel(screen, int(center_x + offset_x), int(center_y + offset_y), white)
	gfxdraw.pixel(screen, int(center_x - offset_x), int(center_y + offset_y), white)
	gfxdraw.pixel(screen, int(center_x + offset_x), int(center_y - offset_y), white)
	gfxdraw.pixel(screen, int(center_x - offset_x), int(center_y - offset_y), white)
	gfxdraw.pixel(screen, int(center_x + offset_y), int(center_y + offset_x), white)
	gfxdraw.pixel(screen, int(center_x - offset_y), int(center_y + offset_x), white)
	gfxdraw.pixel(screen, int(center_x + offset_y), int(center_y - offset_x), white)
	gfxdraw.pixel(screen, int(center_x - offset_y), int(center_y - offset_x), white)

def main(first_point, radius):
	screen.fill(black)
	new_x = 0
	new_y = radius
	DV = 3 - 2*radius

	while new_y >= new_x:
		new_x += 1

		if DV > 0:
			new_y -= 1
			DV += 4*(new_x - new_y) + 10;
		else:
			DV += 4*new_x + 6

		drawCircle(first_point[0], first_point[1], new_x, new_y)

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