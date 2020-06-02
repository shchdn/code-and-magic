window.renderStatistics = function(ctx, names, times){
    var CLOUD_X = 100;
    var CLOUD_Y = 10;
    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = '#fff';
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT mono';
    ctx.fillText( 'Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
    ctx.fillText( 'Список результатов', CLOUD_X + 20, CLOUD_Y + 50);
    var STATS_BAR_HEIGHT = 150;
    var STATS_BAR_WIDTH = 40;
    var STATS_BAR_PADDING = STATS_BAR_WIDTH + 50;
    var STATS_BAR_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
    var STATS_BAR_X = CLOUD_X - STATS_BAR_PADDING + 20;
    console.log(names.length);
    for (var i = 0; i < names.length; i++){
        ctx.fillText( times[i].toFixed(0), STATS_BAR_X + STATS_BAR_PADDING, CLOUD_Y + 30);
        ctx.fillRect(STATS_BAR_X + STATS_BAR_PADDING, CLOUD_Y + 210, STATS_BAR_WIDTH, -150);
        STATS_BAR_X += STATS_BAR_PADDING;
    };

}