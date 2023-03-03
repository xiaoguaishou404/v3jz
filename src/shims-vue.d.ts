declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}
declare module '*.svg' {
    import Vue from 'vue';
    export default Vue;
}
declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}
declare module '*.jpeg' {
    const value: string;
    export default value;
}
declare module '*.gif' {
    const value: string;
    export default value;
}