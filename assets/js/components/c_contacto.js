import get_template from './get_template.js'

export default {
    data: function () {
        return {
 
        }
    },
    
    
    mounted() {

    },

    
    methods:{
        enviar(){
         alert("Mensagem enviada com sucesso")
         window.location.href = "#/"
        },

       
    },
    template: await get_template('./assets/js/components/c_contacto')
}