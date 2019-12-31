// ./components/GoodBye.js

export default {
    name: 'GoodBye',
    props: {
        named: {
            type: String,
            default: '親愛的朋友'
        }
    },
    template: `
            <div>
                <div class="input-group my-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-file-signature"></i></span>
                    </div>
                    <input type="text" class="form-control" v-model='named' placeholder="請輸入您的姓名" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>           
                <p>{{ named }}，再見，期待您很快就再回到 Vue.js 前端設計！</p>
            </div>
            `
};