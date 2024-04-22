# Hello to this simple React game based on a board-game called "Master Mind"!

# Concept  
Mastermind is a classic board game where one player, the "code-maker," selects a secret code consisting of a sequence of colored pegs. The other player, the "code-breaker," attempts to guess the code within a certain number of turns.

The code-maker provides feedback after each guess, indicating how many pegs are the correct color and in the correct position, and how many are the correct color but in the wrong position. Based on this feedback, the code-breaker refines their guesses until they correctly deduce the secret code or run out of turns.

Mastermind is a game of deduction and logic, requiring players to use strategy and pattern recognition to crack the code within the allotted number of guesses. 

# How to play?
1- Player one (Coder) chooses 4 colours from a pallet of 8 colours, example : Red, Green, White, pink (could be repeated colours). Then press a button to hide the code.
2- Player two(Code-Breaker) will attempt to break the code by making smart guesses, then hits "Score" button. If a colour was guessed correctly in the right position 
then a RED point is awarded, if colour is correct but in the wrong position then a BLACK colour is awarded. If non i sguessed then nothing is awarded.

Example: If the coder selected "Orange, White, Red, Orang", then Code_breaker gussed "Red, Green, Purple, Orange" then the score will be:
1 RED point (for correctly guessing Orange in position 4)
1 BLACK point (for correctly guessing RED but in the wrong position)

# Playing Modes
## There are three modes:
1- Default Mode: To practice playing and see how scoring is done.
2- With another player: Get your friend to chose a code and hit "Another Player"
3- With Computer: Let the computer select randoem code by hitting "Play with Computer"
