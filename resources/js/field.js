import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'
import DetailFieldItem from './components/DetailFieldItem'

Nova.booting((app, store) => {
    console.log('Hi there');
    app.component('index-nova-items-field', IndexField)
    app.component('detail-nova-items-field', DetailField)
    app.component('form-nova-items-field', FormField)
    app.component('detail-nova-items-field-item', DetailFieldItem)
})
