import MaterialTable from '@material-table/core';
import PlayerHistoryPanel from '@components/PlayerHistoryPanel'
export default function LeaderboardTable({ leaderboard }) {
    //let players = players;

    let players = []
    for (let player in leaderboard) {
        let playerData = leaderboard[player];
        let date = new Date(playerData["LastUpdate"]);
        let dateString = date.toLocaleDateString();
        let playerDemos = parseInt(playerData["Demolitions"]);
        let playerExterms = parseInt(playerData["Exterminations"]);
        let newPlayer = {
            "Name": playerData["Name"],
            "Demolitions": playerDemos,
            "Exterminations": playerExterms,
            "Last Update": dateString,
            "Country": playerData.Country,
            "History": playerData.History
        }
        players.push(newPlayer);
    }

    players.sort((a, b) => {
        return b.Demolitions - a.Demolitions;
    })

    let i = 1;
    for (let player in players) {
        players[player].DemolitionsRank = i;
        i++;
    }

    players.sort((a, b) => {
        return b.Exterminations - a.Exterminations;
    })
    i = 1;
    for (let player in players) {
        players[player].ExterminationsRank = i;
        i++;
    }

    let columns = [
        {
            title: 'Nom',
            field: 'Name',
        },
        {
            title: 'Démolitions',
            field: 'Demolitions',
            defaultSort: 'desc',
            render: (data) => {
                return data.Demolitions.toLocaleString();
            }
        },
        {
            title: 'Rang démolitions',
            field: 'DemolitionsRank',
            defaultSort: 'asc'
        },
        {
            title: 'Exterminations',
            field: 'Exterminations',
            defaultSort: 'desc',
            render: (data) => {
                return data.Exterminations.toLocaleString();
            }
        },
        {
            title: 'Rang exterminations',
            field: 'ExterminationsRank',
            defaultSort: 'asc'
        },
        {
            title: 'Pays',
            field: 'Country'
        },
        {
            title: 'Derniere mise à jour',
            field: 'Last Update',
            defaultSort: 'asc'
        },
    ];

    const options = {
        thirdSortClick: false,
        idSynonym: "Name",
        pageSize: 25,
        pageSizeOptions: [10, 15, 25, 50, 100],
        showTitle: false,
        padding: "dense",
        tableLayout: "auto",
        tableWidth: "fixed",
        emptyRowsWhenPaging: false,
        rowStyle: (data, index, level) => {
            if (index % 2 == 0) {
                return {
                    backgroundColor: "#044e83",
                    color: "#ffffff",
                }
            } else {
                return {
                    backgroundColor: "#5397c7",
                    color: "#ffffff",
                }
            }
        },
        headerStyle: {
            backgroundColor: '#5397c7',
            color: '#ffffff'
        },
        detailPanelType: "single",
        columnsButton: true,
        draggable: false,
    };

    return <MaterialTable
        title={"Demolition Leaderboard"}
        data={players}
        columns={columns}
        options={options}
        detailPanel={({rowData}) => {
            return PlayerHistoryPanel({rowData});
        }}
        onRowClick={(event, rowData, toggleDetailPanel) => {
            toggleDetailPanel();
        }}
    />
}
