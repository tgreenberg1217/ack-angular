import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AckModule } from './AckModule';
import { AckArray } from './AckArray.directive';

@Component({
  selector: 'container',
  //template:'none'
  template: '<ack-array [(ref)]="AckArray"></ack-array>'
})
export class ContainerComponent {
  AckArray:AckArray
}

@NgModule({
  imports: [ AckModule ],
  declarations: [ ContainerComponent ]
}) export class AppModule {}

describe('ack-array', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let component:any
  
  beforeEach((done) => {
    TestBed.configureTestingModule({imports: [AppModule]})

    TestBed.compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(ContainerComponent)
      fixture.detectChanges()
      component = fixture.componentInstance
    })
    .then( ()=>new Promise((res,rej)=>setTimeout(()=>res(), 0)) )//tick for [(ref)] to process
    .then(done).catch(done.fail)
  })

  it('inits', ()=>{
    expect(fixture).not.toBeNull()
    expect(component).not.toBeNull()
    expect(component.AckArray).not.toBeNull()
  })

  it('#itemIndex', ()=>{
    const ackArray = component.AckArray
    ackArray.idKey = 'caregiver_id'
    ackArray.array = [{caregiver_id:1},{caregiver_id:2},{caregiver_id:3}]
    const itemIndex = ackArray.itemIndex({id:3}, 'id')
    expect( itemIndex ).toEqual(2)
  })
})