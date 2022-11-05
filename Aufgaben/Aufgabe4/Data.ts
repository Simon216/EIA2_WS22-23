namespace shoppinglistA04 {

    
    export interface Input {
        savedItem: string;
        savedAmount: number;
        savedComment: string;
        savedDate: string;
        savedPurchase: boolean;
    }



    export let savedInputs: Input[] = [

        {
            savedItem: "Bier",
            savedAmount: 6,
            savedComment: "kein Bier vor 4!",
            savedDate: "01.11.2022",
            savedPurchase: true
          
        },
       
    ];

    export let savedItem: string = "";

}