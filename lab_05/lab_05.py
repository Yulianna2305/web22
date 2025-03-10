with open("input.txt", "r") as file:
    content = file.readlines()

def is_game_possible(line):
    game_id, rounds = line.split(": ")
    game_id = int(game_id.split()[1])
    
    for round_data in rounds.split("; "):
        for cube in round_data.split(", "):
            parts = cube.split()
            if len(parts) != 2:
                continue
            count, color = parts
            count = int(count)
            if (color == "red" and count > 12) or \
               (color == "green" and count > 13) or \
               (color == "blue" and count > 14):
                return 0
    return game_id

print(sum(is_game_possible(line.strip()) for line in content if line.strip()))
