//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function digitTreeSum(t) {

  const branchStrings = [];
  let branchSums = 0;

  const checkNode = (node, branch, leaf) => {

    branch += node.value.toString();

    if (node.left) {
      checkNode(node.left, branch);
    }
    if (node.right) {
      checkNode(node.right, branch)
    }
    if (!node.left && !node.right) {
      branchStrings.push(branch)
    }

  }

  checkNode(t, '')

  for (i = 0; i < branchStrings.length; i++) {
    branchSums += parseInt(branchStrings[i]);
  }

  return branchSums;

}

t = {
    "value": 0,
    "left": {
        "value": 0,
        "left": {
            "value": 0,
            "left": {
                "value": 0,
                "left": {
                    "value": 0,
                    "left": {
                        "value": 1,
                        "left": {
                            "value": 8,
                            "left": {
                                "value": 7,
                                "left": {
                                    "value": 2,
                                    "left": {
                                        "value": 3,
                                        "left": {
                                            "value": 2,
                                            "left": {
                                                "value": 9,
                                                "left": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 9,
                                                "left": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 7,
                                            "left": {
                                                "value": 6,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 3,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 9,
                                        "left": {
                                            "value": 4,
                                            "left": {
                                                "value": 4,
                                                "left": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 5,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 6,
                                            "left": {
                                                "value": 6,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": null
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 5,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "right": {
                                    "value": 5,
                                    "left": {
                                        "value": 5,
                                        "left": {
                                            "value": 3,
                                            "left": {
                                                "value": 0,
                                                "left": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 0,
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
                                            },
                                            "right": {
                                                "value": 5,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 8,
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
                                                        "value": 3,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 2,
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
                                                        "value": 7,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 3,
                                            "left": {
                                                "value": 0,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 1,
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
                                                        "value": 3,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 3,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 0,
                                        "left": {
                                            "value": 8,
                                            "left": {
                                                "value": 5,
                                                "left": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 2,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 1,
                                            "left": {
                                                "value": 7,
                                                "left": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 4,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "right": {
                                "value": 5,
                                "left": {
                                    "value": 0,
                                    "left": {
                                        "value": 9,
                                        "left": {
                                            "value": 7,
                                            "left": {
                                                "value": 4,
                                                "left": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 0,
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
                                                        "value": 8,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 1,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 3,
                                            "left": {
                                                "value": 1,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 7,
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
                                                        "value": 9,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 1,
                                                "left": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 9,
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
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 0,
                                        "left": {
                                            "value": 9,
                                            "left": {
                                                "value": 4,
                                                "left": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 6,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 4,
                                            "left": {
                                                "value": 8,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 3,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 4,
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
                                                        "value": 9,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "right": {
                                    "value": 5,
                                    "left": {
                                        "value": 8,
                                        "left": {
                                            "value": 4,
                                            "left": {
                                                "value": 8,
                                                "left": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 0,
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
                                                        "value": 3,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 0,
                                                "left": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 6,
                                            "left": {
                                                "value": 5,
                                                "left": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 2,
                                                "left": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 7,
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
                                                        "value": 6,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 2,
                                        "left": {
                                            "value": 3,
                                            "left": {
                                                "value": 5,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 9,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 0,
                                            "left": {
                                                "value": 5,
                                                "left": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 4,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "right": {
                            "value": 2,
                            "left": {
                                "value": 4,
                                "left": {
                                    "value": 4,
                                    "left": {
                                        "value": 0,
                                        "left": {
                                            "value": 2,
                                            "left": {
                                                "value": 8,
                                                "left": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 0,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 8,
                                            "left": {
                                                "value": 6,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 4,
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
                                                        "value": 5,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 5,
                                                "left": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 3,
                                        "left": {
                                            "value": 5,
                                            "left": {
                                                "value": 6,
                                                "left": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 0,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 3,
                                            "left": {
                                                "value": 2,
                                                "left": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 2,
                                                "left": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "right": {
                                    "value": 5,
                                    "left": {
                                        "value": 1,
                                        "left": {
                                            "value": 5,
                                            "left": {
                                                "value": 3,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 6,
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
                                                        "value": 5,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 1,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 8,
                                            "left": {
                                                "value": 9,
                                                "left": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 5,
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
                                            },
                                            "right": {
                                                "value": 6,
                                                "left": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 0,
                                        "left": {
                                            "value": 9,
                                            "left": {
                                                "value": 5,
                                                "left": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 0,
                                                "left": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 2,
                                            "left": {
                                                "value": 2,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 8,
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
                                            },
                                            "right": {
                                                "value": 2,
                                                "left": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 7,
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
                                                        "value": 3,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "right": {
                                "value": 2,
                                "left": {
                                    "value": 0,
                                    "left": {
                                        "value": 7,
                                        "left": {
                                            "value": 7,
                                            "left": {
                                                "value": 0,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 4,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 8,
                                                "left": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 3,
                                            "left": {
                                                "value": 3,
                                                "left": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 3,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 8,
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
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 3,
                                        "left": {
                                            "value": 0,
                                            "left": {
                                                "value": 2,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 6,
                                                "left": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 4,
                                            "left": {
                                                "value": 6,
                                                "left": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 0,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 2,
                                                "left": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "right": {
                                    "value": 4,
                                    "left": {
                                        "value": 9,
                                        "left": {
                                            "value": 2,
                                            "left": {
                                                "value": 0,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 6,
                                                "left": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 2,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 8,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 4,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 0,
                                            "left": {
                                                "value": 0,
                                                "left": {
                                                    "value": 5,
                                                    "left": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 4,
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
                                                        "value": 9,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 3,
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
                                            },
                                            "right": {
                                                "value": 9,
                                                "left": {
                                                    "value": 2,
                                                    "left": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 7,
                                                    "left": {
                                                        "value": 9,
                                                        "left": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 0,
                                                        "left": {
                                                            "value": 1,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "right": {
                                        "value": 8,
                                        "left": {
                                            "value": 9,
                                            "left": {
                                                "value": 0,
                                                "left": {
                                                    "value": 1,
                                                    "left": {
                                                        "value": 7,
                                                        "left": {
                                                            "value": 2,
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
                                                        "value": 3,
                                                        "left": {
                                                            "value": 8,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 9,
                                                    "left": {
                                                        "value": 3,
                                                        "left": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 7,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 8,
                                                        "left": {
                                                            "value": 9,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 4,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            },
                                            "right": {
                                                "value": 0,
                                                "left": {
                                                    "value": 3,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 0,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 1,
                                                        "left": {
                                                            "value": 2,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 6,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 6,
                                                    "left": {
                                                        "value": 5,
                                                        "left": {
                                                            "value": 3,
                                                            "left": null,
                                                            "right": null
                                                        },
                                                        "right": {
                                                            "value": 5,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 6,
                                                        "left": null,
                                                        "right": null
                                                    }
                                                }
                                            }
                                        },
                                        "right": {
                                            "value": 8,
                                            "left": null,
                                            "right": null
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "right": {
                        "value": 1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": 0,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 8,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 1,
        "left": null,
        "right": null
    }
}

console.log(digitTreeSum(t))
