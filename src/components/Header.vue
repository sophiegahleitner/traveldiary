<template>
    <header>
        <nav>
            <ul class="nav">
                <!--
                <li v-for="item in nav">
                    <a class="nav-link active" href='{{item.link}}'>{{item.title}}</a>
                </li>
                -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">Diaries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Journeys</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'headerComponent',
    }
</script>
