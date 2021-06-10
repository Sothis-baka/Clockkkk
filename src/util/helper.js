const leadZero = (num) => {
    if(num < 10){
        return '0' + num;
    }else {
        return String(num);
    }
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const helper = {
    functions: {
        leadZero
    },
    constants: {
        months,
        days
    }
}

export default helper;