/**
 * Created by 92936 on 2016/12/20.
 */
require.config({
    baseUrl:"./js",
    paths:{
        jquery:"jquery-3.1.1.min"
    }

})
require(['jquery','a'],function($,a){
    $('body').css('background-color','red')
   console.log(a.ss(1,2))
})