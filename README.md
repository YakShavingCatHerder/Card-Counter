# The Counter
A Blackjack card-counting calculator that provides Running Count, True Count, and Bet Amounts in realtime. 

<img src="https://i.imgur.com/QhlcDXM.png" width="700">

### Definitions
* **Running Count:** The count derived by adding or subtracting every card that you see in each shoe
  * 2, 3, 7 = +1
  * 4, 5, 6 = +2
  *    8    =  0
  *    9    = -1
  *  10-K   = -2 
  *    A    =  0

* **True Count:** The value of the running count divided by the amount of decks remaining

* **Bet Amount:** The value of your bet based on the True Count.
  * This has been set to follow the following (can be changed to your liking):
    * True count < 2 = Bet 1x
    * True count >= 2 and < 4 = Bet 2x
    * True count >= 4 and < 6 = Bet 3x
    * True count >= 6 and < 8 = Bet 4x
    * True count >= 8 = Bet 5x
    
_For fun and entertainment only. Do not use where illegal or frowned upon._
