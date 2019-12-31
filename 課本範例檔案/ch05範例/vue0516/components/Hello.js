// ./components/Hello.js

export default {
    name: 'Hello',
    props: {
        named: {
            type: String,
            default: '各位'
        }
    },
    template: `
            <div>
                <div class="input-group my-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-pen-nib"></i></span>
                    </div>
                    <input type="text" class="form-control" v-model='named' placeholder="請輸入您的姓名" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>
                <p>歡迎 {{ named }} 來到 Vue.js 前端設計！</p>
            </div>
            `
};