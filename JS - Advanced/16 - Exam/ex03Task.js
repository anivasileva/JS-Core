class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(deadline) {
        if (deadline < Date.now()) {
            throw new Error('The deadline can not be set to a past date');
        }

        this._deadline = deadline;
    }


    get isOverdue() {
        if (this.deadline < Date.now() && this.status !== "Complete") {
            return true;
        } else
            return false;
    }


    static comparator(a, b) {
        if (a.isOverdue && !b.isOverdue) {
            return -1
        }
        if (!a.isOverdue && b.isOverdue) {
            return 1
        } else if (a.isOverdue && b.isOverdue) {
            return a.deadline.getTime() - b.deadline.getTime();
        } else {
            if (a.status === b.status) {
                return a.deadline.getTime() - b.deadline.getTime();
            }

            else {
                let m = new Map();
                m.set('In Progress', 1);
                m.set('Open', 2);
                m.set('Complete', 3);
                return m.get(a.status) - m.get(b.status);
            }
        }
    }


    toString() {
        if (this.isOverdue) {
            return (`[\u26A0] ${this.title} (overdue)`);
        }
        if (this.status === "Open") {
            return (`[\u2731] ${this.title} (deadline: ${this.deadline})`);
        }
        else if (this.status === "In Progress") {
            return (`[\u219D] ${this.title} (deadline: ${this.deadline})`);
        }
        else
            return (`[\u2714] ${this.title}`);
    }

}


let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
// console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000);



