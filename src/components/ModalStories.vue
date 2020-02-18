<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog" 
            width="650"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                >
                    <v-icon>view</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title>História {{ taskNumber }}</v-card-title>
                <v-card-text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere enim quos non hic tempora beatae fuga error modi consectetur, doloribus voluptate in, dolores illo! Veritatis soluta esse libero magni!
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn>Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>


export default {
    name: 'ModalStories',
    data (){
        return {
            taskNumber: 13,
            dialog: false
        }
    }
}
</script>

<style lang="stylus">

</style>