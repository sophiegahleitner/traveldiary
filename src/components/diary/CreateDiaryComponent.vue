<template>
    <div class="create-diary">
        <h1>Create new Diary</h1>
        <div class="create-diary-form">
            <vue-form :state="formstate" @submit.prevent="onSubmit">

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.title)">
                    <label>Title</label>
                    <input type="text" name="title" class="form-control" required v-model="model.title">

                    <field-messages name="title" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Title is a required field</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.country)">
                    <label>Country</label>
                    <select name="country" class="form-control" required v-model="model.country">
                        <option v-for="country in countries" :value="country.name">{{ country.name }}</option>
                    </select>
                    <!--<input type="select" name="country" class="form-control" required v-model="model.country">-->

                    <field-messages auto-label name="email" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Country is a required field</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.from)">
                    <label>From</label>
                    <input type="date" name="from" class="form-control" v-model="model.from">

                    <field-messages name="from" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Start date of journey is a required field</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.to)">
                    <label>To</label>
                    <input type="date" name="to" class="form-control" v-model="model.to">

                    <field-messages name="to" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">End date of journey is a required field</div>
                        <div slot="pattern">End date is invalid</div>
                    </field-messages>

                </validate>

                <validate auto-label class="form-group" :class="fieldClassName(formstate.description)">
                    <label>Description</label>
                    <textarea name="description" class="form-control" minlength="100" v-model="model.description"></textarea>

                    <field-messages name="description" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="minlength">Description must be more than 100 characters</div>
                    </field-messages>
                </validate>

                <validate auto-label class="form-group" :class="fieldClassName(formstate.image)">
                    <label>Image</label>
                    <input type="file" name="image" accept="image/*" class="form-control" required v-on:change="handleFileUpload($event)">
                    <field-messages name="image" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">You have to upload an image.</div>
                    </field-messages>
                </validate>
                <label for="isPublic">public diary?</label>
                <input type="checkbox" id="isPublic" v-model="model.isPublic">


                <div class="py-2 text-center">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </vue-form>
        </div>
    </div>
</template>

<script>
    import { CREATE_DIARY } from '../../constants/graphql'
    import * as Filestack from 'filestack-js';

    export default {
        name: 'CreateDiaryComponent',
        data: function() {
            return {
                countries: [],
                formstate: {},
                model: {
                    title: '',
                    country: '',
                    from: '',
                    to: '',
                    description: '',
                    image: '',
                    isPublic: false,
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
                this.uploadImage();
            },
            getCountriesList: function () {
                this.$http.get('https://restcountries.eu/rest/v1/all').then(function (response) {
                    this.countries = response.body;
                })
            },
            uploadImage: function () {
                const API_KEY = 'AoEwVio1rQlal9YQ6PQUuz';
                const client = Filestack.init(API_KEY);
                let file = this.model.image;
                client.upload(file)
                    .then(res=>this.createDiary(res))
                    .catch(err => {
                        alert("Error while ImageUpload: "+err)
                    });

            },
            createDiary: function (res) {
                console.log(res);
                try{
                    this.$apollo.mutate({
                        mutation: CREATE_DIARY,
                        variables: {
                            title:this.model.title,
                            country:this.model.country,
                            from:this.model.from,
                            to:this.model.to,
                            description:this.model.description,
                            isPublic: this.model.isPublic,
                            userId:  this.$auth.user.name,
                            url: res.url,
                            filename: res.filename,
                            mimeType: res.mimetype,
                        }
                    })
                } catch(e){
                    console.log(e);
                } finally{
                    this.$router.push({name: 'profile'})
                }
            },
            handleFileUpload: function (event){
                this.model.image = event.target.files[0];
            }
            },
            created: function () {
                this.getCountriesList()
            }

    }
</script>
