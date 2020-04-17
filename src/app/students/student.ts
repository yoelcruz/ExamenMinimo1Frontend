export type Student = {
    _id: string;
    name: string;
    address: string;
    phones: Array<string>;
    studies: Array<string>;
};
export type Phone = {
    home?: string;
    work?: string;
};

export class Student1{
	constructor(
		public _id: string,
		public name: string,
        public address: string,
        public phone: string
        /* public phone: Array<Phone> */
    ){}
}
