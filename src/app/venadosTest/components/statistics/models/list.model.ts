export class listGames {
    constructor(
        public away_score: number,
        public home_score: number,
        public image:string,
        public league :string,
        public local: tipoBooleano,
        public opponent: string,
        public opponent_image: string
    ) { }
}

type tipoBooleano = true | false;

export class LabelColumn {
    getLabelMaster() {
        return {
            'position': 'TABLA GENERAL',
            'image' :'EQUIPO',
            'games':'JJ',
            'f_goals': 'DG',
            'a_goals': 'PTS'
        };
    }
}
