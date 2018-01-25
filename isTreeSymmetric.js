//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function isTreeSymmetric(t) {

    if (!t) return true;

    let result = true;

    const treeValues = [];

    const checkLevel = (node, level) => {

        treeValues[level] ? null : treeValues[level] = [];
        
        if (node.left) {
            let leftLevel = level;
            treeValues[leftLevel].push(node.left.value)
            checkLevel(node.left, leftLevel + 1);
        } else {
            treeValues[level].push(null);
        }

        if (node.right) {
            let rightLevel = level;
            treeValues[rightLevel].push(node.right.value);
            checkLevel(node.right, rightLevel + 1);
        } else {
            treeValues[level].push(null);
        }

    }

    checkLevel(t, 0)

    let j = 0;

    for (let i = 0; i < treeValues.length - 1; i++) {
        j = 0;
        while (j < treeValues[i].length / 2) {
            // level[i] === level[level.length - 1 - i] ? null : result = false;
            if (treeValues[i][j] !== treeValues[i][treeValues[i].length - 1 - j]) {
                return result = false;
            }
            j++;
        }

    }

    console.log(treeValues)
    
    return result;
    
}

t = {
    "value": -191,
    "left": {
        "value": 374,
        "left": {
            "value": -361,
            "left": {
                "value": -771,
                "left": null,
                "right": {
                    "value": -379,
                    "left": {
                        "value": -154,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -699,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": 159,
                "left": {
                    "value": -900,
                    "left": {
                        "value": 305,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -486,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": 200,
                    "left": {
                        "value": -699,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 470,
                        "left": null,
                        "right": null
                    }
                }
            }
        },
        "right": null
    },
    "right": {
        "value": 374,
        "left": null,
        "right": {
            "value": -361,
            "left": {
                "value": 159,
                "left": {
                    "value": 200,
                    "left": {
                        "value": 470,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -699,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -900,
                    "left": {
                        "value": -486,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 305,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": -771,
                "left": {
                    "value": -379,
                    "left": {
                        "value": -699,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -154,
                        "left": null,
                        "right": null
                    }
                },
                "right": null
            }
        }
    }
}

console.log(isTreeSymmetric(t))