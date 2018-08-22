import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/dashboard'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/Income',
                    component: resolve => require(['../components/page/Income.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/ad_active',
                    component: resolve => require(['../components/page/ad/active'], resolve)     // vue-datasource组件
                },
                {
                    path: '/ad_project',
                    component: resolve => require(['../components/page/ad/project'], resolve)     // vue-datasource组件
                },
                {
                    path: '/ad_unit',
                    component: resolve => require(['../components/page/ad/unit'], resolve)
                },
                {
                    path: '/ad_detail',
                    component: resolve => require(['../components/page/ad/editPages/unit_one.vue'], resolve)
                },
                {
                    path: '/pro_detail',
                    component: resolve => require(['../components/page/ad/editPages/project_one.vue'], resolve)
                },
                {
                    path: '/active_detail',
                    component: resolve => require(['../components/page/ad/editPages/active_one.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/personal',
                    component: resolve => require(['../components/page/personal.vue'], resolve)    // 个人中心
                },
                {
                    path: '/init_passworld',
                    component: resolve => require(['../components/page/init_passworld.vue'], resolve)    
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login/index.vue'], resolve)
        },
    ]
})
