# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The initial code attempts to increment a state variable (`count`) within the `useEffect` hook without specifying any dependencies.  This causes the effect to run repeatedly, leading to an infinite loop and potential crashes. 

## Solution

The solution in `bugSolution.js` correctly adds an empty dependency array (`[]`) to the `useEffect` hook. This ensures the effect runs only once after the component mounts.