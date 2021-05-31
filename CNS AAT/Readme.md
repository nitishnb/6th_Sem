# Atbash Cipher

## Introduction 
The Atbash cipher is a substitution cipher with a specific key where the letters of the alphabet are reversed. I.e. all 'A's are replaced with 'Z's, all 'B's are replaced with 'Y's, and so on. It was originally used for the Hebrew alphabet, but can be used for any alphabet.

The Atbash cipher offers almost no security, and can be broken very easily. Even if an adversary doesn't know a piece of ciphertext has been enciphered with the Atbash cipher, they can still break it by assuming it is a substitution cipher and determining the key using hill-climbing. The Atbash cipher is also an Affine cipher with a=25 and b = 25, so breaking it as an affine cipher also works

## The Algorithm
The Atbash cipher is essentially a substitution cipher with a fixed key, if you know the cipher is Atbash, then no additional information is needed to decrypt the message. The substitution key is:
```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
ZYXWVUTSRQPONMLKJIHGFEDCBA
```

## Other Implementations 
To encipher your own messages in python, you can use the pycipher module. To install it, use ``` pip install pycipher```. To encipher messages with the Atbash cipher (or another cipher, see here for documentation):
```
>>>from pycipher import Atbash
>>>Atbash().encipher('defend the east wall of the castle')
'wvuvmwgsvvzhgdzoolugsvxzhgov'
>>>Atbash().decipher('wvuvmwgsvvzhgdzoolugsvxzhgov')
'defendtheeastwallofthecastle'
```

## Cryptanalysis 
The Atbash cipher is trivial to break since there is no key, as soon as you know it is an Atbash cipher you can simply decrypt it. If you didn't know it was an Atbash cipher, you could break it by assuming the ciphertext is a substitution cipher, which can still be easily broken. Alternatively, it can be broken if it is assumed to be an Affine cipher.
