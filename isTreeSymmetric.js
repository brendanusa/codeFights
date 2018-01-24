//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function isTreeSymmetric(t) {

    let result = true;

    if (!t) return true;

    if (t.left && t.right && t.left.value !== t.right.value) {
        console.log('16')
        return result = false;
    }
    
    const checkMiniTree = (node) => {

        if (node.left && node.right) {
            if (node.left.left && node.left.right && node.right.left && node.right.right) {
                console.log('18')
                if (node.left.left.value === node.right.right.value && node.left.right.value === node.right.left.value) {
                    console.log('20')
                    checkMiniTree(node.left);
                    checkMiniTree(node.right);
                } else {
                    console.log('24')
                    return result = false;
                }
            } else if (!node.left.left && !node.left.right && !node.right.left && !node.right.right) {
                console.log('28')
                return;
            } else {
                console.log('31')
                return result = false;
            }
        } else if (!node.left && !node.right) {
            console.log('35')
            return;
        } else {
            console.log('38')
            return result = false;
        }

    }

    checkMiniTree(t);
    
    return result;
    
}

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

console.log(isTreeSymmetric(t))