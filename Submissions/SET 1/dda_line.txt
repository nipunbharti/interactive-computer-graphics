import pygame
from pygame import gfxdraw

black = (0, 0, 0)
white = (255, 255, 255)

def main(first_point, second_point):
	screen.fill(black)
	dx = second_point[0] - first_point[0]
	dy = second_point[1] - first_point[1]

	total_steps = abs(dx) if abs(dx) > abs(dy) else abs(dy)

	increment_in_x = dx/float(total_steps)
	increment_in_y = dy/float(total_steps)
	print(increment_in_x, increment_in_y)
	new_x = first_point[0]
	new_y = first_point[1]

	for i in range(0, total_steps):
		gfxdraw.pixel(screen, int(round(new_x)), int(round(new_y)), white)

		new_x += increment_in_x
		new_y += increment_in_y

	while True:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()

		pygame.display.update()


if __name__ == "__main__":
	first_point = input("Enter the first point: ")
	second_point = input("Enter the second point: ")

	first_point = [int(x) for x in first_point.split(',')]
	second_point = [int(x) for x in second_point.split(',')]

	pygame.init()
	size = [700, 500]
	screen = pygame.display.set_mode(size)

	main(first_point, second_point)
	pygame.quit()