<template>
    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
             <h4 class="font-normal text-80">
                {{ field.name }}
            </h4>
        </div>
        <div class="w-3/4 pt-4">
            <component
                :item="item"
                :key="index"
                v-bind="$props"
                :is="field.detailItemComponent"
                v-for="(item, index) in field.value"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field']
}
</script>
