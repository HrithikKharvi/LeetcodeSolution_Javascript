/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let p1 = traverse(p,[]);
    let p2 = traverse(q,[]);
    console.log(p1, p2)
    if(p2.length != p1.length)return false;
    
    for(let i=0; i<p1.length; i++){
        if(p1[i] != p2[i])return false;
    }
    
    return true;
};

function traverse(root, arr){
    if(!root){
        arr.push(-1);
        return arr;
    }
        arr.push(root.val);
    arr = traverse(root.left, arr);
    arr = traverse(root.right, arr);
    
    return arr;
}
