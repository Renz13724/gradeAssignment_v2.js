let score = prompt("Enter your score:");

score = parseInt(score);

let grade = score >= 97 ? "1.00" : 
            score >= 94 ? "1.25" : 
            score >= 91 ? "1.50" :  
            score >= 88 ? "1.75" : 
            score >= 85 ? "2.00" : 
            score >= 82 ? "2.25" : 
            score >= 79 ? "2.50" : 
            score >= 76 ? "2.75" :
            score >= 75 ? "3.00" : 
            score >= 72 ? "4.00" : "5.00";

let remarks = score >= 90 ? "HIGH PASS, Candidate for Cum Laude" : score >= 80 ? "AVERAGE PASS" : score >= 75 ? "LOW PASS" : "FAILED, Needs Improvement";

console.log("Your equivalent Grade is " + grade + " " + (grade === "1.00" || grade === "1.25" ? "Excellent" : grade === "1.50" || grade === "1.75" ? "Above Average" : grade === "2.00" || grade === "2.25" ? "Average" : grade === "2.50" || grade === "2.75" || grade === "3.00" ? "Below Average" : grade === "4.00" || grade === "5.00" ? "Poor" : ""));
console.log("Final Remarks: " + remarks);
