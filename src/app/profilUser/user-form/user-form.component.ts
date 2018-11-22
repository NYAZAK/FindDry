import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
	ProfilUserForm: FormGroup;
	userId;
	constructor(private fB: FormBuilder,
		private route: Router,
		private ProfilS: ProfilService,
		public angularfa: AngularFireAuth, ) { 
			this.angularfa.authState.subscribe(user => {
				if (user) {
				  this.userId = user.uid;
				  console.log('current token', this.userId);
				}
			  })
		}

	ngOnInit() {
		this.ProfilUserForm = this.fB.group({
			name: ['', Validators.required],
			firstname: ['', Validators.required],
			dateborne: ['', Validators.required],
			tel: ['', [Validators.required, Validators.pattern(/['0-9']{10,}/)]],
			address: ['', Validators.required],
			cp: ['', [Validators.required, Validators.pattern(/['0-9']{5,}/)]],
			city: ['', Validators.required],
		})
	}

	onSaveProfil() {
		const name = this.ProfilUserForm.get('name').value;
		const firstname = this.ProfilUserForm.get('firstname').value;
		const dateborne = this.ProfilUserForm.get('dateborne').value;
		const tel = this.ProfilUserForm.get('tel').value;
		const address = this.ProfilUserForm.get('address').value;
		const cp = this.ProfilUserForm.get('cp').value;
		const city = this.ProfilUserForm.get('city').value;
		const uid = this.userId;
		const userProfil = new Profil(name, firstname,dateborne,address,cp,city,tel, uid);
		this.ProfilS.CreateAccount(userProfil,uid);
		this.route.navigate(['/ProfilUser']);
	}
}
