import MaterialTable from '@material-table/core';
export default function PlayerHistoryPanel({ rowData }) {
    let columns = [
        {
            title: 'Démolitions',
            field: 'Demolitions',
            render: (data) => {
                return parseInt(data.Demolitions).toLocaleString();
            }
        },
        {
            title: 'Exterminations',
            field: 'Exterminations',
            render: (data) => {
                return parseInt(data.Exterminations).toLocaleString();
            }
        },
        {
            title: 'Dernière mise à jour',
            field: 'Time',
            defaultSort: 'desc',
            render: (data) => {
                let dateTime = new Date(data.Time);
                let dateString = dateTime.toLocaleDateString();
                dateString += " " + dateTime.toLocaleTimeString();
                return dateString;
            }
        }
    ];

    const options = {
        thirdSortClick: false,
        idSynonym: "Time",
        pageSize: 10,
        pageSizeOptions: [10, 15, 25, 50, 100],
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
            color: '#ffffff',
        },
        detailPanelType: "single",
        draggable: false,
    };

    return <MaterialTable
        title={" Historique de mise à jour de " + rowData.Name}
        data={rowData.History}
        columns={columns}
        options={options}
    />
}
