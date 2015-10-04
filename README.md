# The Counter
A web utility that will assist the Blackjack card counting process. For entertainment purposes only.

## How to use
1. Select the number of decks remaining in the "shoe".
2. In the empty field, enter 2-9 for numbered cards. T for 10. J,Q,K,A (or 1) for face cards.

### Definitions
* **Running Count:** The count derived by adding or subtracting every card that you see in each shoe
  * 2-6 = +1
  * 7-9 = 0
  * 10-Ace = -1 
* **True Count:** The value of the running count divided by the amount of decks remaining
* **Bet Amount:** The value of your bet based on the True Count.
  * This has been set to follow the following (can be changed to your liking):
    * True count < 2 = Bet 1x
    * True count >= 2 and < 4 = Bet 2x
    * True count >= 4 and < 6 = Bet 3x
    * True count >= 6 and < 8 = Bet 4x
    * True count >= 8 = Bet 5x
