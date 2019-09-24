import pygame

black = (0, 0, 0)
white = (255, 255, 255)

def main():
	screen.fill(black)

	# Left side
	pygame.draw.line(screen, white, (100, 550), (380, 550)) # Bottom
	pygame.draw.line(screen, white, (80, 350), (380, 350)) # Top
	pygame.draw.line(screen, white, (100, 350), (100, 550)) # Left
	pygame.draw.line(screen, white, (380, 350), (380, 550)) # Right

	# Front
	pygame.draw.line(screen, white, (380, 320), (380, 550)) # Left
	pygame.draw.line(screen, white, (380, 320), (480, 320))	# Top
	pygame.draw.line(screen, white, (480, 320), (480, 550)) # Right
	pygame.draw.line(screen, white, (480, 550), (380, 550)) # Bottom

	# Right
	pygame.draw.line(screen, white, (480, 350), (480, 550)) # Left
	pygame.draw.line(screen, white, (480, 550), (830, 550)) # Bottom
	pygame.draw.line(screen, white, (480, 350), (850, 350)) # Top
	pygame.draw.line(screen, white, (830, 350), (830, 550)) # Right

	# Top Main
	pygame.draw.line(screen, white, (80, 350), (440, 200)) # Left
	pygame.draw.line(screen, white, (850, 350), (440, 200)) # Right

	# Top Door
	pygame.draw.line(screen, white, (380, 320), (370, 310))	# Slant left
	pygame.draw.line(screen, white, (480, 320), (490, 310))	# Slant right
	pygame.draw.line(screen, white, (490, 310), (370, 310))	# Connection
	pygame.draw.line(screen, white, (370, 310), (430, 290))	# Left hut
	pygame.draw.line(screen, white, (490, 310), (430, 290))	# Left hut

	# Garage
	pygame.draw.line(screen, white, (510, 390), (800, 390)) # Top
	pygame.draw.line(screen, white, (510, 390), (510, 550)) # Left
	pygame.draw.line(screen, white, (800, 390), (800, 550)) # Right

	# Garage Lines
	for i in range(1, 9):
		pygame.draw.line(screen, white, (510, 390+20*i), (800, 390+20*i))

	# Door
	pygame.draw.line(screen, white, (390, 370), (470, 370))	# Main Top
	pygame.draw.line(screen, white, (390, 370), (390, 550))	# Main Left
	pygame.draw.line(screen, white, (470, 370), (470, 550))	# Main Right
	pygame.draw.line(screen, white, (410, 370), (410, 550))	# Separation
	pygame.draw.line(screen, white, (410, 540), (470, 540))	# Step
	pygame.draw.line(screen, white, (410, 400), (470, 400))	# Door
	pygame.draw.rect(screen, white, (415, 460, 5, 15), 1)	# Door Knob

	# Windows
	# Left Window
	pygame.draw.rect(screen, white, (170, 390, 50, 120), 4)
	pygame.draw.line(screen, white, (170, 450), (220, 450), 4)

	# Right Window
	pygame.draw.rect(screen, white, (270, 390, 50, 120), 4)
	pygame.draw.line(screen, white, (270, 450), (320, 450), 4)

	while True:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()

		pygame.display.update()


if __name__ == "__main__":

	pygame.init()
	size = [1000, 700]
	screen = pygame.display.set_mode(size)

	main()
	pygame.quit()