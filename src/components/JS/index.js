import Vue from 'vue';
import CityBox from './CityBox'
export var cityBox = (function(){
    var defaults = {
        city:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOk:null
    }

    return function (opts) {
        for(var attr in opts){
            defaults[attr] = opts[attr]
        }
        var Mycomponent = Vue.extend(CityBox)
        var vm = new Mycomponent({
            el:document.createElement('div'),
            data:{
                city:defaults.city,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel&&defaults.handleCancel.call(this)
                    document.body.removeChild(vm.$el)
                },
                handleOk(){
                    defaults.handleOk&&defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el)
                }
            }

        })
        document.body.appendChild(vm.$el)
    }
})()