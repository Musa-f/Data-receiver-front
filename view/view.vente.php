<?php include("header.php")?>

<h1 class="mt-5">Journal de vente</h1>

<div class="container">
    <div class="row justify-content-center">
        <?php foreach($ecritures as $ecriture):?>
        <?php endforeach?>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Comptes</th>
                    <th scope="col">Date</th>
                    <th scope="col">Débit</th>
                    <th scope="col">Crédit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>707</th>
                    <td>Achat de marchandise</td>
                    <td>30</td>
                    <td></td>
                </tr>
                <tr>
                    <th>707</th>
                    <td>Achat de marchandise</td>
                    <td></td>
                    <td>30</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

