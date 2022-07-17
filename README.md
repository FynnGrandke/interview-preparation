# About This Repository
Years ago I was preparing for a JS coding interview.
This repo is the collection of what I found and solved by myself. 
Now it should serve others as a help to master their next coding interview!

The repository is divided into 3 categories: Easy, Medium, and Hard.
These differences a chosen by me and are totally arbitrary! 

Here is an example of how the questions are structured:
<ol>
<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Count the vowels in a given string.\
Input: `Aloha! My name is Fynn.`\
Output: `6`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function countVowels(inputString) {
    const dict = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let counter = 0;

    [...inputString].forEach(char => {
        if (dict.has(char)) counter += 1;
    });

    return counter
}
```
</details>
</br>
</li>
</ol>

You can see that it starts with the task and an example of how the input and output should look like.\
By clicking on "solution:" the dropdown will open and you can check for the code I wrote.

##
Click on these links to go to the .md files of the appropriate difficulty:
* [Easy](markdown/easy/easy-js-questions.md)
* [Medium](markdown/medium/medium-js-questions.md)

## Disclaimer
I can not guarantee that the code is up-to-date, to modern industry standards, or in any other form perfect.\
These are just examples I found on the internet and solved.\
I just ordered and categorized the questions and added my solution as a help for other fellow engineers (or those of you who want to be one!).


## TODO
* Code examples for "hard" are not yet moved to the .md standard
* good-to-know can be extended
* Add build scripts to make it easier for beginners to get started
