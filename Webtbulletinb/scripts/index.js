/// <reference path="angular-ui/ui-bootstrap.min.js" />
$(function () {
    // $('#my_popup').popup();
    var heightd = window.outerHeight - (0.27 * window.outerHeight);
    $(".bodyV1").css("height", heightd);
    $("#dragable1").draggable();
    $("#dragable2").draggable();
    $("#dragable3").draggable();
    $("#dragable4").draggable();
    $("#dragable5").draggable();
    $("#dragable6").draggable();
    $(".pindragable3").draggable();
    $("#tryme1").click(function () {

        // $("#dilog1").popup();
        console.log("some thing checked.")
    });

    //$('#dragable1').on('click', function () {
    //    $("#dilog1").popup({
    //        opacity: 0.3,
    //        transition: 'all 0.3s'
    //    });
    //    return false;
    //});

    // $("#fade").popup();
    function selectPanel(PanelNum) {
        alert(PanelNum);

    }

});
function ChangeHeight() {
    var heightd = window.outerHeight - (0.27 * window.outerHeight);

    $(".bodyV1").css("height", heightd);

}


var aminApp = angular.module('aminApp1', ['ui.bootstrap']);

aminApp.controller('AminIndexController', function ($scope, $uibModal) {

    $scope.FisrtName = '9499224584';
    $scope.LastName = 'test33222';
    $scope.popOutPanel = function (PanelNum) {
        if (PanelNum == 1) {
            var modal1 = $uibModal.open({

                templateUrl: 'myPanelPop1.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });
        }
        else if (PanelNum == 2) {
            var modal2 = $uibModal.open({

                templateUrl: 'stackedModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });

        } else if (PanelNum == 3) {
            var modal3 = $uibModal.open({

                templateUrl: 'myPanelPop3.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });

        } else if (PanelNum == 4) {
            var modal4 = $uibModal.open({

                templateUrl: 'myPanelPop4.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });
        }
        else if (PanelNum == 5) {
            var modal5 = $uibModal.open({

                templateUrl: 'myPanelPop5.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });
        }
        else if (PanelNum == 6) {
            var modal6 = $uibModal.open({

                templateUrl: 'myPanelPop6.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });


        }

         
    }


});
aminApp.controller('ModalInstanceCtrl', function ($uibModalInstance, $scope) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {

        $uibModalInstance.dismiss('cancel');

    };
});