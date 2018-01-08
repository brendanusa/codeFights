function groupingDishes(dishes) {
  var dishesByIngredient = {};
  dishes.forEach(ingredientList => {
    for (var i = 1; i < ingredientList.length; i++) {
      if (dishesByIngredient[ingredientList[i]] === undefined) {
        dishesByIngredient[ingredientList[i]] = ['', ingredientList[0]];
      } else {
        dishesByIngredient[ingredientList[i]].push(ingredientList[0]);
      }
    }
  })

  for (var key in dishesByIngredient) {
    dishesByIngredient[key].sort();
    dishesByIngredient[key][0] = key;
  }

  return Object.values(dishesByIngredient).filter(ingredient => ingredient.length > 2).sort((a, b) => {
        if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });

}

// dishes = [["Salad","Tomato","Cucumber","Salad","Sauce"], 
//  ["Pizza","Tomato","Sausage","Sauce","Dough"], 
//  ["Quesadilla","Chicken","Cheese","Sauce"], 
//  ["Sandwich","Salad","Bread","Tomato","Cheese"]]

 // dishes = [["Salad","Tomato","Cucumber","Salad","Sauce"]]

 dishes = [["bkbkxGT","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG","uMFhalFdkjnxhcUiebdfNWCjGwamJuQqjqNNoYuRG","HVAPaVtdEqFBINdbpYbdVGxnVtJYPMQHSuSvodCVY","XBRdHtJkNsLhBjRysNPDFmaFVkRuppo","fGCQI znjz Jnjdr"], 
 ["uTaOittcIdIkMcdZryfO nRBajOOOQnmLIdy","ycaOwYSxQmOWde","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG","JAoW"], 
 ["mkaqCEbFoVZ GsGIab","uMFhalFdkjnxhcUiebdfNWCjGwamJuQqjqNNoYuRG","ycaOwYSxQmOWde","fGCQI znjz Jnjdr"], 
 ["iZEFdTcIeDgJHieDtUVPNfXzCdeEDTBuJJqgXzjWqt","ycaOwYSxQmOWde","fGCQI znjz Jnjdr","UZgbmn"], 
 ["YCiDHqy","cCHqnXGGLpTphBRgzaRtyKewNHoqLqiAvEbXKROM","fGCQI znjz Jnjdr","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG","L","IkCzxc AyGHlGlZQOCmwqXVkXUEzwbvzKCXqQlIdXzWdYCduF","UNhSCmuGyQgCcIfCbnGtNpj","uMFhalFdkjnxhcUiebdfNWCjGwamJuQqjqNNoYuRG","QHPxDKcduMSSQIJhHWsdEnPNRvBYDopqoDADSRMQRsllMz"], 
 ["qiiiqCNUvzjD","uMFhalFdkjnxhcUiebdfNWCjGwamJuQqjqNNoYuRG"], 
 ["FpjDEdgPxhohdDLblHWObfPHVHqontROLVurRvrVg","JAoW"], 
 ["bhQTaxyoAGqLSZurqBjTCvhNCgnASbjoIRMiGdulRmGjKQ","tbYoUGKe","BGCuvvQJO"], 
 ["uVQSAygfQizoxhhetDLNpfFMKZKYPPOgjhNJdWItKrosCtDO","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG"], 
 ["eaAnbZtQJqroQDSSLvkfcLxYWBShyFDsL","fGCQI znjz Jnjdr","BGCuvvQJO","mAGxEL","cCHqnXGGLpTphBRgzaRtyKewNHoqLqiAvEbXKROM","L","y","UNhSCmuGyQgCcIfCbnGtNpj"], 
 ["FjxUeolzoVrPlQklJaWWcA zYjaACbKSuIFgSewKAdsurqwXm","IkCzxc AyGHlGlZQOCmwqXVkXUEzwbvzKCXqQlIdXzWdYCduF","TbxzmUzoNqKDhVCyRaxCaRN cGifIe","yFDvNpDbcKLHvUw","mAGxEL","fGCQI znjz Jnjdr","UNhSCmuGyQgCcIfCbnGtNpj","HspXjmgVPWpvTYERNRhspsIYC","pDDUbdfbNkyHMhxJjuiffSEQGNXeXYbGPAWqZJXUEHuL GY","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG"], 
 ["gehbgVOhyaISFMb yMyYSfxEbFcM","y","MrGaChaqtzQnwGuJALGDQ"], 
 ["PgeljiDSNwqynIzvRxIetPlckBeITuDTSlUphLKzESwZ","yFDvNpDbcKLHvUw","vipjotvVUySuOAsJN","HVAPaVtdEqFBINdbpYbdVGxnVtJYPMQHSuSvodCVY","MrGaChaqtzQnwGuJALGDQ","QHPxDKcduMSSQIJhHWsdEnPNRvBYDopqoDADSRMQRsllMz","iz zgZ","PDTUjNQfWsRdzmuDICiRCK","SVvHkpTCslcyliKeVeP"], 
 ["NMls","LatTTBMRs umHUFTEX","L"], 
 ["cEW kZMmFNaWPMeqtlaHfcMgd","TbxzmUzoNqKDhVCyRaxCaRN cGifIe","y","UNhSCmuGyQgCcIfCbnGtNpj","LatTTBMRs umHUFTEX","HKYbcMFHRaOxDPdp"], 
 ["DiGgcJPAOgAxkhV LUqD","NEvsHlwCsrETcadNMEJDSUnJzVCtMI","RhaBPwneGWzxtfSamwWZDDIgKtnEBDdafPHoCe"], 
 ["TPwLHGVVmhduRtn","PxodGkQcmwucvIsTWlRE","glJtWIHizzmslZLJFYxExsSaLFLScWIGjxFygqY","WQnGYJppGthPAGkkrEEdsWazdZFa","GETaaMYfdXgOeoAxoWDPIYjhzFkqhzqb RrJoyLjbDHgADFcFx","tbYoUGKe","BGCuvvQJO","yFDvNpDbcKLHvUw"], 
 ["NenNsr","L","CBUjppHygrjMoPOTZaKxmSgO ","RYOZnhTpqUazerSCHrZtIoPmQvhGoiIKaTTCsCNDK"], 
 ["dwokeiSq","XNckjNnGZJUkPBv SuoQauVzctO","ec DrfVKxPHfkAfjMmlFrNMfVEpsQtKixhuLaVJYXrGUg","zhdUIMEVPAVqBXpCpDLLz","XBRdHtJkNsLhBjRysNPDFmaFVkRuppo","JRrWTMaxjxdgIMcihqMlHYxScDZFbZlxv","GETaaMYfdXgOeoAxoWDPIYjhzFkqhzqb RrJoyLjbDHgADFcFx","RYjsxXOGOLKLCSvndTAUodQPLNwVxSUYkxeBYz","MrGaChaqtzQnwGuJALGDQ","akqCZCOkGbJBNVFZcCgpJmGmwxbSbQyMycHCC"], 
 ["aAxuf ngnhaKHCDrouurCd ThjTovOnWVkMW","BGCuvvQJO","XxZu","IkCzxc AyGHlGlZQOCmwqXVkXUEzwbvzKCXqQlIdXzWdYCduF","WtPXDaowqRQrxsHXdU eZofS","PDTUjNQfWsRdzmuDICiRCK","IWgDxZJILnBHkJFne","fWidcKXDMnbsdKsbGOKJnpYwlLThrsBlkzTTIxWVrIXynPVc"], 
 ["uukeDYxnfwkXoXWlJlQkndJrJc","HspXjmgVPWpvTYERNRhspsIYC","TbxzmUzoNqKDhVCyRaxCaRN cGifIe"], 
 ["plzmkKpNLqFy","BAkLYHAHJpuRDfSwfoosPolejQ","iz zgZ","y"], 
 ["rLp","mAGxEL","CBUjppHygrjMoPOTZaKxmSgO ","XjnbZcyAqFqDjoDbhDH","LatTTBMRs umHUFTEX","akqCZCOkGbJBNVFZcCgpJmGmwxbSbQyMycHCC","tbYoUGKe"], 
 ["vH","  nbopDbUxmJuyFqDrdkPgF","ec DrfVKxPHfkAfjMmlFrNMfVEpsQtKixhuLaVJYXrGUg","ycaOwYSxQmOWde","vJKsdnDaNOS JKMAFmnkTcEIAwhQfIIjVNGLJztzBIJIwpwI","fGCQI znjz Jnjdr","RhaBPwneGWzxtfSamwWZDDIgKtnEBDdafPHoCe","fWidcKXDMnbsdKsbGOKJnpYwlLThrsBlkzTTIxWVrIXynPVc","oLwnKUbeVMrPcnqsXk"], 
 ["sROReNEjBcVKWBzwviU"," aMGGuOHUVLXOKmoLVSNqQxweY E","brpWloeLAYNXAVHGxlIQGuejBwtMLDfMQMUOHY","oWNLpcxfOaxZUxJwkOTnHUoSMbBUucUdBYofXLpChTY","y"], 
 ["ofbMXiTHhNSeEZuNweHdABZGXtKJJJjCQsNhySAAYeY","WgAcWdjBtJJWrqSYsUlmQrmvUbNiXYIBmRLngudnTRtT","fWidcKXDMnbsdKsbGOKJnpYwlLThrsBlkzTTIxWVrIXynPVc","iZEJj EhQCZDlotQrurKjhdTFlyyvUMZJgbjeMFkBTeycsu","y","RYOZnhTpqUazerSCHrZtIoPmQvhGoiIKaTTCsCNDK","pDDUbdfbNkyHMhxJjuiffSEQGNXeXYbGPAWqZJXUEHuL GY"], 
 ["JrkrlugcMlaZtpiUJWzdYVLQlTxhzUcKeKGYXjCXOsXJn","zhdUIMEVPAVqBXpCpDLLz","XxZu","  nbopDbUxmJuyFqDrdkPgF","LZqYwTDfiCpWEhjFYukXugoqstnYM JfBxIYOdGgP"], 
 ["kDoXyZuGbuCGoQFEFocVoyWYnG nGzXmKrbLS","ec DrfVKxPHfkAfjMmlFrNMfVEpsQtKixhuLaVJYXrGUg","glJtWIHizzmslZLJFYxExsSaLFLScWIGjxFygqY","L","nTiTCMnEYFPcPzjaMDS FaDtnOUDxZFQa","YBeFyQhXuCvSPRJnRkTwlhl GrLXJSnTy","oLwnKUbeVMrPcnqsXk","fbfKvSyutPMrLzPzTlUlIsirXVOYZDuoUvKXVPHwV","LYcgUBpNAazJUG YhPlbYSoAnXXplIW jWAMvPfmrcYul"], 
 ["ZMvBBDaeOxTXAfcFHoNbkAZFh","kOeRGEebRJEuwHNIeZ MnsDNReBDLzQDb","IWgDxZJILnBHkJFne","XZqnruGcsbWzMci aTnlyitxyHLWnbLPHvLTYh","iz zgZ","sJrtVXBLKEbofXXiBkpF","HXgNEefeOyoSWewisAcqbYXFMlYzk jrpGXDKpRHQyrd","  nbopDbUxmJuyFqDrdkPgF","IkCzxc AyGHlGlZQOCmwqXVkXUEzwbvzKCXqQlIdXzWdYCduF","sPDYK oUhhz gvKDblrkbtBj"], 
 ["RTibyX Im SJQznunCxEImyrFvRYlfnmjjpmnoptouaGeQfb","LbHKBJMqlGzHqcScXNqzzXnrxowii","tSetK","xt","FTxckCCIlLDauwhcLWTBXVvEiCVcqMd RC","WD","HXgNEefeOyoSWewisAcqbYXFMlYzk jrpGXDKpRHQyrd","xczPEcKatrhfvSlTFP","JAoW","ExZwyiFbYOdHC"], 
 ["FqEfDxtiSNAoOyfcrUAiP","ctAyDxJfUTdGyozenQOZDtYC otZzwIYiZIVtkKYkdOmbvynnw","IkCzxc AyGHlGlZQOCmwqXVkXUEzwbvzKCXqQlIdXzWdYCduF","xczPEcKatrhfvSlTFP"], 
 ["JGz","nqSwBiZDNnDHjOQgoEFXEuAMHVoaIPR JOulmcOenJcP","sPDYK oUhhz gvKDblrkbtBj","rRBFvuMAP","L","xMFuGjfTNHigy","oMHYKTmPnhAZSeRzTBOUvCGpWpFJ dTXw GtBWqINKnmrDBbJG","xNmIIvrbXYpm hcaHenVJ","dzFADZpOjMpwyWAYCxssyFKuiIahXSqVeebkTyzRMcgiw"], 
 ["LGtWJvjviRQVaJYpQHtL","QHPxDKcduMSSQIJhHWsdEnPNRvBYDopqoDADSRMQRsllMz","hQHwbiIludKo","zhdUIMEVPAVqBXpCpDLLz","XrAoxzDyntNkVOHGDvuPnUhZxVx","xkHeUgepwQVyvhAgKeXmRbLeQQywDgwtx","Qa"], 
 ["hjq djnRFjCErMCRMCndbtJArSXpXipMYpRX","WD","brpWloeLAYNXAVHGxlIQGuejBwtMLDfMQMUOHY","EWAvcQzlmHkIGPSOMfHmkeqmDqktQwGlhsmeUkdOOVTdrdOR"], 
 ["SRFVHsowzIJRtY XWDWnAJtNUaUaVRuYvcvnrR","CtrZSQEzMkEWnJdHlluxiJFb","LatTTBMRs umHUFTEX","iz zgZ","dzFADZpOjMpwyWAYCxssyFKuiIahXSqVeebkTyzRMcgiw","bizMVWZNB","jDZkZDx","lExkivvp Eqlyh"], 
 ["XJklDwtzhDwNCgOHgKqPvSKVeTpHvcUukqEqJdrwt W","axGXDDLhgDHCWWfBGi"], 
 ["JbojWdCSvnjrw osZOJJEjwUectDbfC","L","xt"], 
 ["MhuuamgsRRWJwrckLSoctpdEyLdVWYmDYzpPJPZAPvCk XtYg","y","HspXjmgVPWpvTYERNRhspsIYC","cCHqnXGGLpTphBRgzaRtyKewNHoqLqiAvEbXKROM","XZqnruGcsbWzMci aTnlyitxyHLWnbLPHvLTYh","vJKsdnDaNOS JKMAFmnkTcEIAwhQfIIjVNGLJztzBIJIwpwI"], 
 ["YmcCG sDc","Jgp","sPDYK oUhhz gvKDblrkbtBj","swpSsCWmfxZkiJeKXLVdPCJzKVjRCUjim"], 
 ["dv bHCvhnQsbEZtncayOUI NhwomjCHEgoRnD","LatTTBMRs umHUFTEX","JTEHbKGyYBsPNDhvQvFdp","y","dzFADZpOjMpwyWAYCxssyFKuiIahXSqVeebkTyzRMcgiw","oWNLpcxfOaxZUxJwkOTnHUoSMbBUucUdBYofXLpChTY"], 
 ["RjdxxklbNzsSlzDYjvvcaWvIa","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG","CdPLlrkVteGmHVLNrZJJnfRQYhZX Nysw","iHIzGRYYkZrTtKukXEQOkTeZXDomlzCmbaaB","iz zgZ","xMFuGjfTNHigy","jngVxgoefSkpO HeLGgKbiHOubiXBuvR","Jgp"], 
 ["rJDNXlDpmvwKYrgapsGLBjdqzteKCc","y","nR  qzAKOyJjPhKyEAUKOqWDDNlc NRyTSCjTf lCSSUNuzzV ","xkIZuAPpfhba","UZgbmn","jDZkZDx","IWgDxZJILnBHkJFne","jNLgzGXXhq ","OCn","  nbopDbUxmJuyFqDrdkPgF"], 
 ["DVApNc","oLwnKUbeVMrPcnqsXk","jXBeEEv E tidzgVExiKIRhPyHqbmpKXVybUOJitJzmTKAWN","ckBjIDZPdmG","JUNzxbQNIeUmMVlleGbIBTo","RYOZnhTpqUazerSCHrZtIoPmQvhGoiIKaTTCsCNDK","L"], 
 ["NQBUslSXTjaePnVsxvJZInMPdChEcRYuQSBNccrCNsbmcBwngf","pbbMFUR","mlukTNCs wZjsq","ycaOwYSxQmOWde"], 
 ["YSLWNBVanunRESwqnkoAtXaau","DfLmvCVCN","YBeFyQhXuCvSPRJnRkTwlhl GrLXJSnTy","pKTpxwpdZJEyAkqQRrNzCiEfDJXdtKXuaXcuRTmqvGoGcBEXQ","L YFqZJAGikFKxCSrOToSaTkdycdESMBwyHkIPflEh","QLY awiylUxuKmvTxM zxk","FTxckCCIlLDauwhcLWTBXVvEiCVcqMd RC","wfYEbqBfXiFemwLxTOaJvtFBIewRwGiPbnZetFQDndHMQiQoUI","mAGxEL"], 
 ["nAlFzkTfGrPAKDZQPMyDPch","JAoW","QHPxDKcduMSSQIJhHWsdEnPNRvBYDopqoDADSRMQRsllMz","mlukTNCs wZjsq","RYjsxXOGOLKLCSvndTAUodQPLNwVxSUYkxeBYz","Tryf"," ZOoBezGGilcdeUUYNlCZDTU","sJrtVXBLKEbofXXiBkpF","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG"], 
 ["bu","IWgDxZJILnBHkJFne","HspXjmgVPWpvTYERNRhspsIYC"], 
 ["IxuaBSZNjGyJSENDwXwEHJUnstxOVMLdCd"," ZticLScWVtpxtsWjvfxNxigHAhireZQ","ec DrfVKxPHfkAfjMmlFrNMfVEpsQtKixhuLaVJYXrGUg","JRrWTMaxjxdgIMcihqMlHYxScDZFbZlxv"], 
 ["hhqvi QgjymluGEMZfuCq","UZgbmn","ycaOwYSxQmOWde","L YFqZJAGikFKxCSrOToSaTkdycdESMBwyHkIPflEh","rnGuWzNWBOzLRe","XBRdHtJkNsLhBjRysNPDFmaFVkRuppo","LbHKBJMqlGzHqcScXNqzzXnrxowii","swGARlIdYKKYUWEGu XXp","iHIzGRYYkZrTtKukXEQOkTeZXDomlzCmbaaB"], 
 ["mHgFVbwZtFzJtzHHTdyLWAMNWapMKNIKgNEMBjcbCMzJmF"," uREoWUw rbdsLtTVwKMgAxyOZsrWlGabqHY qkGIeHEOfVXw","oMHYKTmPnhAZSeRzTBOUvCGpWpFJ dTXw GtBWqINKnmrDBbJG","AZAgJpBwrKgpVxWJWigg"], 
 ["bTZKOHxUPYJSWMPpDMnnfFBAKroecxnETQzSeXrjBdOZv C","URwCK KzcIpp NiDAGAxaLHRCfWLBGPdanbP MlZCmoWTeTdO","hAYb YyVwFGXMDBszaEriKmyhLyUIIDWmPTPjLacV","ckBjIDZPdmG","RhaBPwneGWzxtfSamwWZDDIgKtnEBDdafPHoCe","pQn","PJxeep jqXZMDPYguIQTmeNpONrxGZLNCYrLYlnRT"], 
 ["vazgDjQVP cCaTvWaErDmJxbHXyktKhQVmoyYN","f","uYLqCpIJsCAVeLdatJsMX","pDDUbdfbNkyHMhxJjuiffSEQGNXeXYbGPAWqZJXUEHuL GY","iz zgZ","oaQAwQmRUNLizhEMsCbIPFzRZBwgkrY pZUyZETIofFNYM","cDmUGeSfTrDLzXZLEbQizziZEsL"], 
 ["BbA JVOcXrsDkzjywBDExlxAmPbIRUBoBNAEJxMgxNPs","E","LatTTBMRs umHUFTEX","tUWSAyMwYcVigwvZgiBYnnd","jXBeEEv E tidzgVExiKIRhPyHqbmpKXVybUOJitJzmTKAWN","LYPfnSW","ec DrfVKxPHfkAfjMmlFrNMfVEpsQtKixhuLaVJYXrGUg"], 
 ["pUMGOEKAYpoWlTraPduUSpWMxlErdkOwQknXFbKsf","JUNzxbQNIeUmMVlleGbIBTo","hAYb YyVwFGXMDBszaEriKmyhLyUIIDWmPTPjLacV","Tryf","NLcYJmvynjusOFpLmwqThCVyScLaZnFRlYxCNrcthccdvHnoxk","UNhSCmuGyQgCcIfCbnGtNpj","JrGNMOJSCtSlECKEevXk","wdce XnjwOTumFkPLWOCbSJCuDng","exJyKBJbyxQubtjelFpY"], 
 ["cb m DLseMrqPVW","QLY awiylUxuKmvTxM zxk","VgmxBZaFUXIXuLMwhlmtV pURzAqBIJqWyYypvLAWWJRSEnn","brpWloeLAYNXAVHGxlIQGuejBwtMLDfMQMUOHY","LZqYwTDfiCpWEhjFYukXugoqstnYM JfBxIYOdGgP","EmhOuZpKigKVvABnGsDOfuJwzircztEEcI FxjAVtfcNxla","dOwb RXOndmAEuzoyLPwBX","LatTTBMRs umHUFTEX"], 
 ["RfGTmGatZJSxKcqJSZavbVYnlLf LNxyQidvHTBUzaplyYH","DfLmvCVCN","URwCK KzcIpp NiDAGAxaLHRCfWLBGPdanbP MlZCmoWTeTdO","y","jDZkZDx"], 
 ["FOxrHDltHr tlGNdEEZGkhCgedcyPBaCZij","jeYkJ"], 
 ["NdGs","gPnhEmJBoyPPPuyuKSKLjpXMAFgt","YBeFyQhXuCvSPRJnRkTwlhl GrLXJSnTy","IWgDxZJILnBHkJFne"," ZticLScWVtpxtsWjvfxNxigHAhireZQ","PDTUjNQfWsRdzmuDICiRCK","MAmQHhnS"], 
 ["ukzOUOmEABBxOpfi","fGCQI znjz Jnjdr","MAmQHhnS","xkOVeDtbtPefTpVZzJhk","PxodGkQcmwucvIsTWlRE","uJIihlUfXwUlJBpi","uYLqCpIJsCAVeLdatJsMX"], 
 ["zrFyZy","Jgp","XNckjNnGZJUkPBv SuoQauVzctO","MAmQHhnS","BQRjnLUwolRhlQMIDosVvv"], 
 ["iKcdUJezEDixGHFnnGB OfAAWATVfXFGdaG","dxdjHFgNhqzYkdTMdIYYUfdSmzOTkxRjQfXRGaZaIJXi","NLcYJmvynjusOFpLmwqThCVyScLaZnFRlYxCNrcthccdvHnoxk","glJtWIHizzmslZLJFYxExsSaLFLScWIGjxFygqY","xkHeUgepwQVyvhAgKeXmRbLeQQywDgwtx","LNliWqlPTTB SSTwnNpBd","jNLgzGXXhq ","sPDYK oUhhz gvKDblrkbtBj","BvNrkowM","tRvfoombv"], 
 ["WCTiBtbxfdYByXSjhcJPJYRlOYNrXOqpmWOkvqQdEmsZb","E","gPnhEmJBoyPPPuyuKSKLjpXMAFgt","xNmIIvrbXYpm hcaHenVJ","jOECrquinIZVUEYxSOvddHKhHKFaOgXJ","QHPxDKcduMSSQIJhHWsdEnPNRvBYDopqoDADSRMQRsllMz","DOvxRfhiXYKWFgEtSkTsqOIFbVDhhEaVahF","JUNzxbQNIeUmMVlleGbIBTo","nJVUrsgrrnvCExLkUUrPsbuzk","tpvgUQDirBhwLYNshDBihJYYSxT"], 
 ["LEeteA","HCKkFEUzdfDeQcTrKMsNAtQgfGxvdXY","xkHeUgepwQVyvhAgKeXmRbLeQQywDgwtx","SfGmrFrAv","oaQAwQmRUNLizhEMsCbIPFzRZBwgkrY pZUyZETIofFNYM","ExZwyiFbYOdHC"], 
 ["TkItnVGIpzHXOJMOKbAqWdPyU","XxZu"], 
 ["gaqulnikgrgrZxbcXNgbuYMLDpSB","fiUYFROjTxVwdItLBMRIPMPnP","BQRjnLUwolRhlQMIDosVvv","PDTUjNQfWsRdzmuDICiRCK","BvNrkowM","AGWBiqbanxMfkKvlkzuQscNRDFxVRgHzXQEapQVHcXiUsKK","Cfc qtkOl ","lExkivvp Eqlyh","hGMAWAlUpKdNWSzzoTGlZZJczRodlBRdOJzYAcinXqfnrGUBS"], 
 ["eTHfLnxoqjbDcYhhNHBCssSSsHaEQsRJvO","SfGmrFrAv","FsUYb XUKtZ","pDDUbdfbNkyHMhxJjuiffSEQGNXeXYbGPAWqZJXUEHuL GY","tpvgUQDirBhwLYNshDBihJYYSxT"], 
 ["WHVEFjoR","gPnhEmJBoyPPPuyuKSKLjpXMAFgt","BvNrkowM","YtfeZWGIBlOt","EWAvcQzlmHkIGPSOMfHmkeqmDqktQwGlhsmeUkdOOVTdrdOR","swGARlIdYKKYUWEGu XXp","FHaKJhmSyA LhOtUwUQXNawLE UdO","JRrWTMaxjxdgIMcihqMlHYxScDZFbZlxv","AGWBiqbanxMfkKvlkzuQscNRDFxVRgHzXQEapQVHcXiUsKK"], 
 ["MVjhMSSecZisESnllbpEfeLJipSemnWMEdwRqkRpkm","ycaOwYSxQmOWde"], 
 ["xnlqtTubIROppYLLhioqr KWW","EWAvcQzlmHkIGPSOMfHmkeqmDqktQwGlhsmeUkdOOVTdrdOR"], 
 ["k KzZyjqNUyhTlMcZTDLTKCUkcgDcgLZpWTZxNAziixnPwRAeM","xHVWQfqJVapF","SVvHkpTCslcyliKeVeP","IVWcgEOuhqkViTytSCZQFskBOPA"," E tOhIDjoY U","pNoTIYEerNfVbWnVAPK","LQmJmYyVdpmxpuxEsLcooikt OcNeDNqFb","hwh","JUNzxbQNIeUmMVlleGbIBTo","LhAlagLuToiLgWGeMsvNf wdKEnApNWFFBf"], 
 ["YBmMNiPXzCNVnzBEEksiwwwYgD ptvxfqIdLbXwcuKEA","hwh","FTxckCCIlLDauwhcLWTBXVvEiCVcqMd RC","mjpRMeomabpuMnRMzd ZBSikPsMhQNmz","fWidcKXDMnbsdKsbGOKJnpYwlLThrsBlkzTTIxWVrIXynPVc","WGb bBxrqKxMHsnBSRfcjSAcyn","HCKkFEUzdfDeQcTrKMsNAtQgfGxvdXY","MJANBcRZnMGzBDclJzfGjxuGXGVuNzNO","vKVMT","  nbopDbUxmJuyFqDrdkPgF"], 
 ["UJIlYLOjSJLZBsOKdQw uyEb ehAItYqlGdUsFRkfa","diUok ","mcAwTFgJNrJtyYhfCcdSXirlvcilrZvnM ZBjVsBiV","yZsyeDEBKBHcwhXdyCyhg TtW","tlluPNjCfydHmgVpZJYO","BQRjnLUwolRhlQMIDosVvv","VzFMjeKFJJnxOohqbLCnEjzpFpZlkBLTR","sSMFaiPXfzMooYXBqLhcNZVsdxIkeObAtperVqkOvnwvULWyTT","gNaby E","XrAoxzDyntNkVOHGDvuPnUhZxVx"], 
 ["tngocUXkkUwgHFOYdwvTUfnIqThCrLtinNzinufecxc","URwCK KzcIpp NiDAGAxaLHRCfWLBGPdanbP MlZCmoWTeTdO","IVWcgEOuhqkViTytSCZQFskBOPA"], 
 ["ddRwgpBO KC","RHvkuGGHOGlLvdYeLdKEXRmxaFUdLoVwicKldbCilD","p"," uXPKmDfIWoRelaUUMYupcREWrGTmnog","GdznbwiBZOzDkhpkNKygmAlFHIemyIpMXpgRczSEt"," EftAMTpcFBFhgSqcAEFoSh EhRWyoHN WDvrGkDCKayH","JUkdvTFqC tpYinySNsmzCAYpHAnMzi EAYtHnvVhh","PtqZULFrJrWIAjtruvgZZudJDXjGJsmWPjZJovKrKNSN lIfao"], 
 ["JBQkX","uYLqCpIJsCAVeLdatJsMX","fWidcKXDMnbsdKsbGOKJnpYwlLThrsBlkzTTIxWVrIXynPVc","Tryf","NEvsHlwCsrETcadNMEJDSUnJzVCtMI","f"], 
 ["SZPclVIocMGBokuAQLhWkdvNUvRyEda","exJyKBJbyxQubtjelFpY","JRrWTMaxjxdgIMcihqMlHYxScDZFbZlxv","YlxUD DtnnggGQBJf tKddEvGSQnoCJQQvFioltKwOEsuP","WGb bBxrqKxMHsnBSRfcjSAcyn","oWNLpcxfOaxZUxJwkOTnHUoSMbBUucUdBYofXLpChTY","jOECrquinIZVUEYxSOvddHKhHKFaOgXJ","xOelTdDIsfqyzivHcienOgBAIVpXDmJAeMbLPjntktDv","JwUWBosVVeZjaiFcUQazccPfPaKdkk gUAkUnIpwoLPj"], 
 ["OSZgYGGXYBuexhOQjoRaKQyRdzMcPpEdpNWPtoRY","gNaby E","VyMBijOOgrtY","QHPxDKcduMSSQIJhHWsdEnPNRvBYDopqoDADSRMQRsllMz","dzFADZpOjMpwyWAYCxssyFKuiIahXSqVeebkTyzRMcgiw","HccrrmLnz fRUTpQpeNVqQPvNoTUQHdU rPwtYOUWdmPW","StzhpBNhwjJCNVROtyLIgXlXYrPnE","vlSoFf"], 
 ["LtzlnTalkQXlayygyrhivPdtwqHnqciflTvFOddVhRuJSFj","WD","B","oHYUEvOXjKsgCxMYvxtxPHUzDndqOoGikN","y VkCJthlcAFYrpkdDjGQxXy tm","  nbopDbUxmJuyFqDrdkPgF","nGf","E"], 
 ["voxhBI GjZEhQNZvTtsEvfkEnBYffAl","TzdkzLJhegJHygiJLflVvvKlDPJcC","qkGkadDWfa nOCyOdMlxhdrZgEfF","iQIPNOnOIKAAwhuRmsTEbNAiKQmhumcIpzhbRTOaDSufUIdKLJ","JUNzxbQNIeUmMVlleGbIBTo","ZvsJuJzZfr","AbQRsppiZTs TyOgmCcwlEeGvKWVVSnEMBPXEFnFbNsLp","sSMFaiPXfzMooYXBqLhcNZVsdxIkeObAtperVqkOvnwvULWyTT"], 
 ["VNopnNqEzcjyIcPzWD","AbQRsppiZTs TyOgmCcwlEeGvKWVVSnEMBPXEFnFbNsLp","ZoNXqEoqrmgaeYBtdSfrYQnOrqJxkUYdvBGUAN","nwDBN"], 
 ["wtUMWyjGvKAtUfXiIyJxLZzeMzcTWkkIBtD","RASjTTz","maU gRmKpbyjhzbVfYfnLbqCRI hXMBEVxL","LYcgUBpNAazJUG YhPlbYSoAnXXplIW jWAMvPfmrcYul","ctAyDxJfUTdGyozenQOZDtYC otZzwIYiZIVtkKYkdOmbvynnw","fQvW","xczPEcKatrhfvSlTFP","xEy ","sJrtVXBLKEbofXXiBkpF"], 
 ["gFympSXJm","dzFADZpOjMpwyWAYCxssyFKuiIahXSqVeebkTyzRMcgiw","JjmolRCJUd pdUJgWVvp","TbxzmUzoNqKDhVCyRaxCaRN cGifIe"], 
 ["doQDPJ","tiXERCMqY","PFwvmKcdROrdnSGwg","LhAlagLuToiLgWGeMsvNf wdKEnApNWFFBf","ICFcncZHhcpgXWc hRVGeDgsvbUvIRjRMDWHxPbIqiHR","cDmUGeSfTrDLzXZLEbQizziZEsL","oWNLpcxfOaxZUxJwkOTnHUoSMbBUucUdBYofXLpChTY","brpWloeLAYNXAVHGxlIQGuejBwtMLDfMQMUOHY","gNNWqG GixGshVjCNvapgOPPaTCjxFjxRsE"], 
 ["vOoxyGpiLRBlUzrAHHYqqubidihfNTfgG","XrAoxzDyntNkVOHGDvuPnUhZxVx","JAoW","JgIDxeNDnSogBGfTwpuayjnWlkZ","ZdaSHjheZxhLKsSGd","PTwVgYAjgiPBFBrD SPqfkfYHavl"], 
 ["VUxAko n","SRgcYt bAANvfzKV pUwSFgCIlLgGTTIhnQMtUdrF","NeaUHVc","QNXKqfXSIDuWngrKlnbKauWZlgPEhX","zTnGDHMXQXBXDPPkm GUNUkndOHRPXciTQOhgMJZXloqo"], 
 ["YsmuuEmgtmsqlYCwWlXXYAIbEvfKKpEACaD QLRiHua","MrGaChaqtzQnwGuJALGDQ","WTFUgqtrFEUbEkLolT BYEXsvbUzOlS","m","fAaMxBsDiKH","XNckjNnGZJUkPBv SuoQauVzctO"], 
 ["lXNBjhTAoglCiZJMGbjfANkm","VAljZpGJDSrNuhf","tRvfoombv"], 
 ["lEsycoYVjtjICGgtBzYaRMxtGnG","  nbopDbUxmJuyFqDrdkPgF","fiUYFROjTxVwdItLBMRIPMPnP","MXahBqSkxjGcyqCqvqwUiUBEkQpHpdFbtn","JUNzxbQNIeUmMVlleGbIBTo","MUOnxJdKOa ZAJcZTDkQcXNERyHGTIUPD"], 
 ["QTIEZGjwGEJEaYOaJuLBEgWtOEESWSduWLYEtkmVavUYgZNwSq","WgAcWdjBtJJWrqSYsUlmQrmvUbNiXYIBmRLngudnTRtT","exJyKBJbyxQubtjelFpY","LatTTBMRs umHUFTEX","p","omSgIdzEzBuZicTNlTQ"], 
 ["NFkBZRnwMgFDQwQNLGOhoCfSAovPLUyZSxSQBrMUfLNp","iz zgZ","vvjoIzJbbTNA","jeYkJ","LXJX uBhUtXIcCbBzCnbQjBRwtTexCGswbG","cFCSpxN","BICFbkdYYbpzXulvdwpiAcXEAaSBiIUQ","FsUYb XUKtZ","ICFcncZHhcpgXWc hRVGeDgsvbUvIRjRMDWHxPbIqiHR","YHxuKXllaBvMNpXGJvqkcGbYVcEZawGSfHzRKZ"], 
 ["YtoZOMfJm oxUxTJvqbBhZjpMYoSjub","vKVMT","StzhpBNhwjJCNVROtyLIgXlXYrPnE","GbiuJhbhpNrUHvYSONaGUTEIZYsdcEJ CSKd","UNhSCmuGyQgCcIfCbnGtNpj","fNxGKaLnZLCesEMKQBbRjSzTzwZUoXutjqVpxWoQMa","mcAwTFgJNrJtyYhfCcdSXirlvcilrZvnM ZBjVsBiV","jeYkJ","dCvXbxrpUloHhFXsYrSgYPqXMOaovAfQtsA","EHmhhgsL"], 
 ["HzRWGYWospOlnmgYIRJPiNyVVUShfWraMVZty ASiSrsFIdwMC","ErbdlRLcwpqeqGagGqcbiFMty"], 
 ["M iDj ULxOZyZfBAThC","tNLBmGitISsAErBrMDlCoEUCRusxIGYShSi UrFWhwPai","cNtsiXsLUebjzYNVjswEFNzawPlKBImAhEE","tpvgUQDirBhwLYNshDBihJYYSxT"], 
 ["PbScsz YA","j U","thdIJwYlwBOSRmXTudwZ tUTWjxzxhROU FAFi WFjafeJS","UOsuivedFDokgwhpeFKXOKLZlVlaOdLcVz","NLcYJmvynjusOFpLmwqThCVyScLaZnFRlYxCNrcthccdvHnoxk","nqSwBiZDNnDHjOQgoEFXEuAMHVoaIPR JOulmcOenJcP","mZctrH","rWwUVFScYPajbMYYoXrQVTnhDYPiPnyMbQ AwIeYKnM"], 
 [" qBK BkUUeATcGtAblzVhsXYsPQKvdaPGZzSr Vg","KfNRZBEsXgkYtWEdanRjlqXY","oKVD gSdedwRUorA","ScdLSWjDzDNJEhGNJgZebxylHHTOYrbimTGiIoUhYKrZZqQL","uvArHSeEpdZJeFpWmQhOIaznGKh"], 
 ["NznBcGefYBXJPasfKqlseyvcrKOf jm AyLDeyG","T"], 
 ["z","fiUYFROjTxVwdItLBMRIPMPnP","clHwQOBqfUOMWcJ","iQIPNOnOIKAAwhuRmsTEbNAiKQmhumcIpzhbRTOaDSufUIdKLJ","dCcwWBKasVhVByIXZxmevmrSjFUp","ExZwyiFbYOdHC","RcAMvDOqDTz","oYLAMDhpBPbPvbeca","L"], 
 ["jUh oSxmnscr MPBKysrOHIMgSXpdeaAouZesY","luGfmctpFWy","kEwRHWiuRDfMDDiIAezovCkSscG","LXfDSIPgIeuMMWOENeVcMdDNzi","cNtsiXsLUebjzYNVjswEFNzawPlKBImAhEE","yFDvNpDbcKLHvUw"], 
 ["v","hQHwbiIludKo","cMUfMoiX"," uXPKmDfIWoRelaUUMYupcREWrGTmnog","MJANBcRZnMGzBDclJzfGjxuGXGVuNzNO","iYgLtgPOgKzcaBzNlZcuWP"], 
 ["yDeQIZrAXqaktrOnHnbE","KPPnhDuFWG"]]

 console.log(groupingDishes(dishes))