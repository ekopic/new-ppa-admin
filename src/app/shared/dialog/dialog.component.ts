import { Component, Input, Output, EventEmitter, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MatDialogConfig, MatDialog, MAT_DIALOG_DATA } from "@angular/material";
/* import { SnackService } from "../../services/snack.service"; */

import DataSource from "devextreme/data/data_source";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    //  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

    @Input() isIcon: boolean;
    @Input() item: any;
    @Input() isArch: boolean;
    @Input() type: any;
    @Input() reportName: any;
    @Input() disabled: boolean;
    @Output() onApply = new EventEmitter();
    @Input() urn: any;
    @Input() stornotype: any;
    @Input() filter: any;

    dialogRef: MatDialogRef<any>;
    lastCloseResult: string;
    config: MatDialogConfig = {
        data: '',
        disableClose: false,
        width: '',
        height: '',
        position: {
            top: '',
            bottom: '',
            left: '',
            right: ''
        },
    };

    constructor(public dialog: MatDialog) { }
    openConfirmPopup() {
        this.config.width = '350px';
        //this.config.height = '400px';
        this.dialogRef = this.dialog.open(ConfirmPopupComponent, this.config);
        this.dialogRef.componentInstance.item = this.item;
        this.dialogRef.componentInstance.type = this.type;

        this.dialogRef.afterClosed().subscribe(result => {
            this.lastCloseResult = result;
            this.dialogRef = null;
            if (result)
                this.onApply.emit();

        });
    }

    openAddNewEventPopup() {
        debugger
        this.config.width = '400px';
        this.config.height = '480px';
        /* if (temp != "")
            this.reportName = temp;
        if (typeof (this.type) != "undefined")
            this.config.data = this.type; */
        this.dialogRef = this.dialog.open(AddNewEventPopupComponent, this.config);
        /* this.dialogRef.componentInstance.type = this.type;
        this.dialogRef.componentInstance.reportName = this.reportName; */

        this.dialogRef.afterClosed().subscribe(result => {
            this.lastCloseResult = result;
            this.dialogRef = null;
            this.onApply.emit(result);
        });
        return this.dialogRef;
    }

}


@Component({
    selector: 'confirm-popup-dialog',
    templateUrl: './confirm-popup.component.html'
})
export class ConfirmPopupComponent {
    @Input() item: any;
    isChecked: any;
    @Input() type: any;
    username: string;
    alignment = 'start';
    constructor(
        public dialogRef: MatDialogRef<ConfirmPopupComponent>) {
    }
    confirm() {
        if (this.isChecked) {
            if (localStorage['defaultSettings']) {
                let x: Array<any> = JSON.parse(localStorage.getItem('defaultSettings'));
                let index = x.findIndex(el => { return el.username === this.username; });
                if (index > -1) {
                    x[index].DontAskConfirm = this.isChecked;
                }
                else {
                    // ako nema za trenutnog usera 
                }
                localStorage['defaultSettings'] = JSON.stringify(x);

            }
        }
        this.dialogRef.close(true);
    }

}

@Component({
    selector: 'addnewevent-popup-dialog',
    templateUrl: './addnewevent-popup.html'
})
export class AddNewEventPopupComponent implements OnInit {
    /* @Input() type: any;
    @Input() reportName: any; */
    startDate: Date;// = new Date();
    endDate: Date;// = new Date();
    recuring: any = false;
    weeksRecuring: number = 1;
    location: string = "";
    summary: string = "";
    constructor(public dialogRef: MatDialogRef<AddNewEventPopupComponent>
        , @Inject(MAT_DIALOG_DATA) public dataType: any) {
    }
    ngOnInit(): void {

    }
    addNewEvent() {
        debugger
        //console.log("sdadasd");

        var reportParams = {
            start: this.startDate,
            end: this.endDate,
            recuring: this.recuring,
            weeksRecuring: this.weeksRecuring,
            location: this.location,
            summary: this.summary
        }; //saljem datume OD-DO
        let body = JSON.stringify(reportParams);
        this.dialogRef.close(body);

    }

}

