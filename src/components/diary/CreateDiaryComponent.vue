<template>
    <div class="create-diary">
        <h1>Create new Diary</h1>
        <div class="create-diary-form">
            <vue-form :state="formstate" @submit.prevent="onSubmit">

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.title)">
                    <label>Title</label>
                    <input type="text" name="title" class="form-control" required v-model.lazy="model.title">

                    <field-messages name="title" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Title is a required field</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.country)">
                    <label>Country</label>
                    <select name="country" class="form-control" required v-model.lazy="model.country">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <!--<input type="select" name="country" class="form-control" required v-model.lazy="model.country">-->

                    <field-messages auto-label name="email" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Country is a required field</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.from)">
                    <label>From</label>
                    <input type="date" name="from" class="form-control" v-model.lazy="model.from">

                    <field-messages name="from" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Start date of journey is a required field</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.to)">
                    <label>To</label>
                    <input type="date" name="to" class="form-control" v-model.lazy="model.to">

                    <field-messages name="to" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">End date of journey is a required field</div>
                        <div slot="pattern">End date is invalid</div>
                    </field-messages>

                </validate>

                <validate auto-label class="form-group" :class="fieldClassName(formstate.description)">
                    <label>Description</label>
                    <textarea name="description" class="form-control" minlength="100" v-model.lazy="model.description"></textarea>

                    <field-messages name="description" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="minlength">Description must be more than 100 characters</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group" :class="fieldClassName(formstate.image)">
                    <label>Image</label>
                    <input type="file" name="image" accept="image/*" class="form-control" required v-on:change="model.image">

                    <field-messages name="image" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">You have to upload an image.</div>
                    </field-messages>
                </validate>


                <div class="py-2 text-center">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </vue-form>
        </div>
    </div>
</template>

<script>
    import { CREATE_DIARY } from '../../constants/graphql'
    export default {
        name: 'CreateDiaryComponent',
        data: function() {
            return {
                formstate: {},
                model: {
                    title: '',
                    country: '',
                    from: '',
                    to: '',
                    description: '',
                    image: '',
                }
            }
        },
        methods: {
            fieldClassName: function (field) {
                if (!field) {
                    return '';
                }
                if ((field.$touched || field.$submitted) && field.$valid) {
                    return 'has-success';
                }
                if ((field.$touched || field.$submitted) && field.$invalid) {
                    return 'has-danger';
                }
            },
            onSubmit: function () {
                console.log(this.title);
                try{
                    this.$apollo.mutate({
                        mutation: CREATE_DIARY,
                        variables: {
                            title:"AAA",
                            country:"count",
                            from:"2019-04-18",
                            to:"2019-04-18",
                            description:"desc",
                        }
                    }).then(alert("done"));
                } catch(e){
                    console.log(e);
                }
            }
        }
    }
</script>
