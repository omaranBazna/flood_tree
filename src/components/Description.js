import React from "react";

const Description = () => {
  return (
    <div>
      <h1>Flooding A Binary Tree </h1>
      <div>
        given a binary tree return a tree after flooding it with a <u>color</u>{" "}
        starting form <u>start_node</u>
        The start node will be given as an array of -1's an 1's start form the
        root [0] where 1 mean go right ,-1 mean go left it is guaranteed the
        Tree Is Balanced if the start
      </div>

      <h2>Example1:</h2>
      <h4>Input:</h4>
      <p>[0,0,0] , [0] , 1</p>
      <h4>Output:</h4>
      <p>[1,1,1] </p>
      <p>
        the start node is the root ,flooding color 1 will result with this tree
      </p>
      <h2>Example2:</h2>
      <h4>Input:</h4>
      <p>[0,1,1,1,2,1,1] , [0,-1] , 2</p>
      <h4>Output:</h4>
      <p>[0,2,2,2,2,1,1] </p>
      <p>
        the start node the left branch of the root which happen to be 1 ,after
        flooding the tree with 2 we will get the output result
      </p>
    </div>
  );
};

export default Description;
