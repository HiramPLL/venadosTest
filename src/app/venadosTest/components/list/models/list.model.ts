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
            'away_score': 'PUNTAJE DE VISITANTE',
            'home_score' :'PUNTAJE DE LOCAL',
            'image':'PARTIDOS',
            'local': 'LOCAL',
            'opponent': 'OPONENTE',      
            'opponent_image': 'EQUIPO',
            'datetime': 'FECHA',
        };
    }
}
