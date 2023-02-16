See in homework2.js, I improved my homework 1 solution to implement the bottom-up search detailed here: https://people.csail.mit.edu/asolar/SynthesisCourse/Lecture3.htm,
The inputs to the synthesize function include the desired inputs and outputs; the ouput is all the potential mappings.
To implement pruning, I halt the alogirthm once the expression exceeds an aritrary length, 16, and remove expressions with * or / 1 at the beginning or end. In future iterations, I would like to improve upon the pruning heuristics.   

