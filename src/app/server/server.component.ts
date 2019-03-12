import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId = 12;

    test() {
        this.serverId;
        return "ads "+this.serverId;
    }

}