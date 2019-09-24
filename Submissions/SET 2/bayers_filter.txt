import pygame, random
from pygame import gfxdraw

black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)
blue = (0, 0, 255)
green = (0, 255, 0)

random_colours = []
colours_matrix = []
new_colours = []

def left_edge():
	# Left edge
	i = 0
	for j in range(0, 7):
		if j == 0:
			r = colours_matrix[i][j][0]
			g = int((colours_matrix[i+1][j][1] + colours_matrix[i][j+1][1])/2)
			b = colours_matrix[i+1][j+1][2]
			new_colour = (r, g, b)
			pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
		elif j == 6:
			r = colours_matrix[i][j][0]
			g = int((colours_matrix[i+1][j][1] + colours_matrix[i][j-1][1])/2)
			b = colours_matrix[i+1][j-1][2]
			new_colour = (r, g, b)
			pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
		else:
			if j%2 == 0:
				r = colours_matrix[i][j][0]
				g = int((colours_matrix[i][j-1][1] + colours_matrix[i+1][j][1] + colours_matrix[i][j+1][1])/3)
				b = int((colours_matrix[i+1][j-1][2] + colours_matrix[i+1][j+1][2])/2)
				new_colour = (r, g, b)
				pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
			else:
				r = int((colours_matrix[i][j-1][0] + colours_matrix[i][j+1][0])/2)
				g = int((colours_matrix[i][j][1] + colours_matrix[i+1][j-1][1] + colours_matrix[i+1][j+1][1])/3)
				b = colours_matrix[i+1][j][2]
				new_colour = (r, g, b)
				pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))

def top_edge():
	j = 0
	for i in range(1, 7):
		if i == 6:
			r = colours_matrix[i][j][0]
			g = int((colours_matrix[i-1][j][1] + colours_matrix[i][j+1][1])/2)
			b = colours_matrix[i-1][j+1][2]
			new_colour = (r, g, b)
			pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
		else:
			if i%2 == 0:
				r = colours_matrix[i][j][0]
				g = int((colours_matrix[i-1][j][1] + colours_matrix[i+1][j][1] + colours_matrix[i][j+1][1])/3)
				b = int((colours_matrix[i-1][j+1][2] + colours_matrix[i+1][j+1][1])/2)
				new_colour = (r, g, b)
				pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
			else:
				r = int((colours_matrix[i-1][j][0] + colours_matrix[i+1][j][0])/2)
				g = int((colours_matrix[i][j][1] + colours_matrix[i-1][j+1][1] + colours_matrix[i+1][j+1][1])/3)
				b = colours_matrix[i][j+1][2]
				new_colour = (r, g, b)
				pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))

def right_edge():
	i = 6
	for j in range(1, 7):
		if j == 6:
			r = colours_matrix[i][j][0]
			g = int((colours_matrix[i-1][j][1] + colours_matrix[i][j-1][1])/2)
			b = colours_matrix[i-1][j-1][2]
			new_colour = (r, g, b)
			pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
		else:
			if j%2 == 0:
				r = colours_matrix[i][j][0]
				g = int((colours_matrix[i][j-1][1] + colours_matrix[i-1][j][1] + colours_matrix[i][j+1][1])/3)
				b = int((colours_matrix[i-1][j-1][2] + colours_matrix[i-1][j+1][2])/2)
				new_colour = (r, g, b)
				pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))
			else:
				r = int((colours_matrix[i][j-1][0] + colours_matrix[i][j+1][0])/2)
				g = int((colours_matrix[i][j][1] + colours_matrix[i-1][j-1][1] + colours_matrix[i-1][j+1][1])/3)
				b = colours_matrix[i-1][j][2]
				new_colour = (r, g, b)
				pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))

def bottom_edge():
	j = 6
	for i in range(1, 6):
		if i%2 == 0:
			r = colours_matrix[i][j][0]
			g = int((colours_matrix[i-1][j][1] + colours_matrix[i+1][j][1] + colours_matrix[i][j-1][1])/3)
			b = int((colours_matrix[i-1][j-1][2] + colours_matrix[i+1][j-1][2])/2)
		else:
			r = int((colours_matrix[i-1][j][0] + colours_matrix[i+1][j][0])/2)
			g = int((colours_matrix[i][j][1] + colours_matrix[i-1][j-1][1] + colours_matrix[i+1][j-1][1])/3)
			b = colours_matrix[i][j-1][2]
		
		new_colour = (r, g, b)
		pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))

def center_piece():
	for i in range(1, 6):
		for j in range(1, 6):
			if i%2 == 0:
				if j%2 == 0:
					# Red pixel
					r = colours_matrix[i][j][0]
					g = int((colours_matrix[i][j-1][1] + colours_matrix[i][j+1][1] + colours_matrix[i-1][j][1] + colours_matrix[i+1][j][1])/4)
					b = int((colours_matrix[i-1][j-1][2] + colours_matrix[i+1][j-1][2] + colours_matrix[i+1][j-1][2] + colours_matrix[i+1][j+1][2])/4)
				else:
					r = int((colours_matrix[i][j-1][0] + colours_matrix[i][j+1][0])/2)
					g = int((colours_matrix[i][j][1] + colours_matrix[i-1][j-1][1] + colours_matrix[i+1][j-1][1] + colours_matrix[i+1][j-1][1] + colours_matrix[i+1][j+1][1])/5)
					b = int((colours_matrix[i-1][j][2] + colours_matrix[i+1][j][2])/2)

			else:
				if j%2 == 0:
					r = int((colours_matrix[i-1][j][0] + colours_matrix[i+1][j][0])/2)
					g = int((colours_matrix[i][j][1] + colours_matrix[i-1][j-1][1] + colours_matrix[i+1][j-1][1] + colours_matrix[i+1][j-1][1] + colours_matrix[i+1][j+1][1])/5)
					b = int((colours_matrix[i][j-1][2] + colours_matrix[i][j+1][2])/2)
				else:
					r = int((colours_matrix[i][j-1][0] + colours_matrix[i][j+1][0] + colours_matrix[i-1][j][0] + colours_matrix[i+1][j][0])/4)
					g = int((colours_matrix[i-1][j][1] + colours_matrix[i+1][j][1] + colours_matrix[i][j+1][1] + colours_matrix[i][j-1][0])/4)
					b = colours_matrix[i][j][2]
			
			new_colour = (r, g, b)
			pygame.draw.rect(screen, new_colour, pygame.Rect(i*100, j*100, 100, 100))



def apply_filter():	
	# Edges
	left_edge()
	top_edge()
	right_edge()
	bottom_edge()
	center_piece()

def main():
	x = 0
	y = 0
	while x < 700:
		y = 0
		random_colours = []
		while y < 700:
			if (x/100) % 2 == 0:
				if (y/100) % 2 == 0:
					temp = (random.randint(0, 255), 0, 0)
					pygame.draw.rect(screen, temp, pygame.Rect(x, y, 100, 100))
				else:
					temp = (0, random.randint(0, 255), 0)
					pygame.draw.rect(screen, temp, pygame.Rect(x, y, 100, 100))
			else:
				if (y/100) % 2 == 0:
					temp = (0, random.randint(0, 255), 0)
					pygame.draw.rect(screen, temp, pygame.Rect(x, y, 100, 100))
				else:
					temp = (0, 0, random.randint(0, 255))
					pygame.draw.rect(screen, temp, pygame.Rect(x, y, 100, 100))
			random_colours.append(temp)
			y += 100
		# print(random_colours)
		colours_matrix.append(random_colours)
		x += 100

	while True:
		for event in pygame.event.get():
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_SPACE:
					apply_filter()
			if event.type == pygame.QUIT:
				pygame.quit()

		pygame.display.update()


if __name__ == "__main__":

	pygame.init()
	size = [700, 700]
	screen = pygame.display.set_mode(size)

	main()
	pygame.quit()